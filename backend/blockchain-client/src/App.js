import React from 'react';
import { StyleSheet, View, Button, ActivityIndicator, Text } from 'react-native';
import Space from './views/Space';

import Form from './views/Form';
import GenerateFish from './views/GenerateFish';
import FishWallet from './views/FishWallet';
import WebcamReader from './views/WebcamReader';

const axios = require('axios');
const Lib = require('./Lib');
const LibVechain = require('./LibVechain');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show:'content',
      vtho:'0',
      storeValue:'~',
      walletAddress:'0x0',
      ipfsPath:'',
      dump:{}
    };
  }

  componentDidMount() {
    const defaultAddress = '0x442505e340Aaa078F11966D0aDeD527b7E05c2ab';
    const connex = window.connex;
    // if(!connex) {
    //   this.setState({show:'disconnect'});      
    // } else {
    //   LibVechain.getStoreValue()
    //   .then(result=>{
    //     this.setState({show:'content',storeValue:result,dump:result,walletAddress:defaultAddress});
    //     this.setWalletAddress(defaultAddress);
    //   })
    // }
  }

  refresh() {
    LibVechain.getStoreValue()
      .then(result=>{
        this.setState({storeValue:result});
        return this.setWalletAddress(this.state.walletAddress);
      })
  }

  setWalletAddress(addr) {
    const vthoAddr = '0x0000000000000000000000000000456e65726779';
    return LibVechain.getTokenBalance(vthoAddr, addr)
    .then(result=>{
      this.setState({walletAddress:addr,vtho:result,dump:result});
    });
  }

  setStoreValue(num) {
    const address = this.state.walletAddress;
    const newValStr = num;
    LibVechain.setStoreValue(newValStr,address)
    .then(result=>{
      this.setState({dump:result});
      return LibVechain.getStoreValue();
    })
    .then(result=>{
      this.setState({storeValue:result});
    })
  }

  uploadFile() {
    const data = new FormData();
    data.append('file',this.state.selectedFile);
    axios.post('http://localhost:3000/upload',data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(result=>{
      console.log(result.data[0].path);
      this.setState({ipfsPath:result.data[0].path});
    });
  }

  generateToken(addr) {
    const tokenName = this.state.ipfsPath;
    LibVechain.createFish(tokenName,addr)
    .then(result=>{
      this.setState({dump:result});
    })
  }

  render() {
    if(this.state.show === 'busy') {
      return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center',height:'90vh'}}>
          <ActivityIndicator />
        </View>
      );
    }

    if(this.state.show === 'disconnect') {
      return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center',height:'90vh'}}>
          <Text>PLEASE OPEN USING VECHAIN BROWSER</Text>
        </View>
      );
    }

    const dump = JSON.stringify(this.state.dump);
    return (
      <View style={{flex:1,flexDirection:'row',height:'90vh',padding:10}}>
        <View style={{flex:1}}>
          <GenerateFish 
            ipfsPath={this.state.ipfsPath}
            onSetFile={f=>{
              this.setState({selectedFile:f});
            }}
            onClickUpload={()=>this.uploadFile()}
            onClickGenerate={(addr)=>this.generateToken(addr)}
          />
        </View>
        <Space />
        <View style={{flex:1}}><FishWallet title='Fisherman Wallet'/></View>
        <Space />
        <View style={{flex:1}}><FishWallet title='Supplier Wallet' /></View>
        <Space />
        <View style={{flex:1}}><WebcamReader /></View>
      </View>
    );
  }

}

export default App;