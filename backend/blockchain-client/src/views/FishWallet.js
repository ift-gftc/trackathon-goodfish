import React from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import Space from './Space';

const styles = require('./Styles').styles;
const Lib = require('../Lib');
const LibVechain = require('../LibVechain');

export default class FishWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAddress:'',
      inputReceiverAddress:'',
      rows:[],
      dump:{},
      walletAddress:'',
      txUrl:''
    };
  }

  componentDidMount() {
    // const addrDefault = '0xf4c00d671b98cC69F12D5CB1A39527684ABDE219';
    // this.setState({walletAddress:addrDefault});
    // Lib.delay(1000)
    // .then(()=>{
    //   return this.refresh();
    // });

    this.interval = setInterval(()=>this.refresh(),10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  refresh() {
    const addr = this.state.walletAddress;
    if(addr.length == 0) return;
    LibVechain.getFishesByOwner(addr)
    .then(result=>{
      this.setState({rows:result,dump:result});
    });
  }

  handleInputAddress(txt) {
    this.setState({inputAddress:txt});
  }

  handleSetWalletAddress() {
    const addr = this.state.inputAddress;
    this.setState({walletAddress:addr});
    Lib.delay(1000)
    .then(()=>{
      this.refresh();
    })
  }

  render() {
    // <Text>{JSON.stringify(this.state.dump)}</Text>

    let content = this.renderRows(); 
        
    if(this.state.show === 'transferFish') {
      content = this.renderTransfer();
    }

    return (
      <View style={{flex:1}}>
        <View style={{padding:20, borderWidth:1, borderColor:'gainsboro'}}>
          <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
          <Text style={styles.text}>ADDRESS: {this.state.walletAddress}</Text>
          <Text style={styles.text}>FISH OWNED: {this.state.rows.length}</Text>
          <Space />
          <Text style={styles.text}>SET WALLET ADDRESS</Text>
          <TextInput
            style={{height:40,borderWidth:1,borderColor:'gainsboro',padding:5}}
            onChangeText={(text) => this.handleInputAddress(text)}
            value={this.state.inputAddress}
          />
          <Space />
          <Button title='Set Wallet Address' onPress={()=>this.handleSetWalletAddress()}/>
        </View>
        <Space />
        {content}
      </View>
    );
  }

  openIpfs(url) {
    window.open(url, '_blank');
  }

  checkExplorer() {
    const url = this.state.txUrl;
    window.open(url, '_blank');
  }

  transferFish(item) {
    const fishId = item.fishId;
    const codeName = item.codeName;
    this.setState({show:'transferFish',codeName:codeName,fishId:fishId,txUrl:''})
  }

  transferNow() {
    const tokenId = this.state.fishId;
    const to = this.state.inputReceiverAddress;
    const signerAddress = this.state.walletAddress;
    LibVechain.simpleTransfer(to,tokenId,signerAddress)
    .then(result=>{
      const txid = result.txid;
      const url = 'https://insight.vecha.in/#/txs/'+txid;
      this.setState({dump:result,txUrl:url});
    })
  }

  renderRow(item) {
    const ipfsUrl = 'http://127.0.0.1:5001/ipfs/QmfQkD8pBSBCBxWEwFSu4XaDVSWK6bjnNuaWZjMyQbyDub/#/explore/'+item.codeName;
    const mapUrl = 'http://127.0.0.1:3000/getfish/'+item.fishId;
    return (
      <View key={item.fishId+''} style={{flexDirection:'column'}}>
        <Space />
        <View style={{flex:1,justifyContent:'center'}}>
          <Text style={styles.text}>{item.codeName}</Text>
          <Text style={styles.text}>fishID: {item.fishId}</Text>
        </View>
        <View style={{flexDirection:'row',paddingVertical:5}}>
          <View style={{flex:1}}><Button color='gray' title='IPFS' onPress={()=>this.openIpfs(ipfsUrl)}/></View>
          <Space />
          <View style={{flex:1}}><Button title='MAP' onPress={()=>this.openIpfs(mapUrl)}/></View>
          <Space />
          <View style={{flex:1}}><Button title='transfer' onPress={()=>this.transferFish(item)}/></View>
        </View>
        <Space />
      </View>
    );
  }

  renderRows() {

    const rows = this.state.rows;

    return (
      <View style={styles.box}>
        <Text style={styles.title}>FISHES</Text>
        <Space />
        <View style={{flex:1,height:'50vh'}}>
          <Space />
          <FlatList
            data={rows}
            renderItem={({item,index}) => this.renderRow(item)}
            ItemSeparatorComponent={()=>{
              return (
                <View style={{backgroundColor:'gainsboro',height:1}} />
              );
            }}
          />
        </View>
      </View>
    );
  }

  renderTransfer() {
    let content;
    if(this.state.txUrl.length > 0) {
      content = (
        <View>
          <Button title='Check Explorer' onPress={()=>this.checkExplorer()}/>
        </View>
      );
    } else {
      content = (
        <View>
          <Text style={styles.text}>FISH HASH: {this.state.codeName}</Text>
          <Text style={styles.text}>FISH ID: {this.state.fishId}</Text>
          <Space />
          <Text style={styles.text}>SET RECEIVER ADDRESS</Text>
          <TextInput
            style={{height:40,borderWidth:1,borderColor:'gainsboro',padding:5}}
            onChangeText={(text) => this.setState({inputReceiverAddress:text})}
            value={this.state.inputReceiverAddress}
          />
          <Space />
          <Button title='Transfer' onPress={()=>this.transferNow()}/>
        </View>
      );
    }
    return (
      <View style={styles.box}>
        <Text style={styles.title}>TRANSFER FISH</Text>
        <Space />
        {content}
        <Space />
        <Button color='red' title='Back' onPress={()=>{
          this.refresh();
          this.setState({show:'fishes'});
        }}/>

      </View>
    );
  }



}

