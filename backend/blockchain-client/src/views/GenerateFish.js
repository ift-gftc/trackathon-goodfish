import React from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import Space from './Space';

const styles = require('./Styles').styles;
const Lib = require('../Lib');

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAddress:'',
      walletAddress:''
    };
  }

  handleUpload() {
    this.props.onClickUpload();
  }

  setFile(files) {
    if(files && files[0]) {
      this.props.onSetFile(files[0]);
    }
  }

  handleGenerateToken() {
    const addr = this.state.walletAddress;
    this.props.onClickGenerate(addr);
  }

  handleSetWalletAddress() {
    const addr = this.state.inputAddress;
    this.setState({walletAddress:addr});
  }

  render() {
    const disableGenerate = this.props.ipfsPath.length == 0;
    let ipfs = '';
    if( this.props.ipfsPath.length > 0 ) {
      ipfs = this.props.ipfsPath;
    }
    return (
      <View style={styles.box}>
        <Text style={styles.title}>GENERATE FISH TOKEN ON VECHAIN</Text>
        <Text style={styles.text}>Please upload EPCIS file:</Text>
        <Space />
        <input type="file" name="theFile" onChange={e=>this.setFile(e.target.files)}/>
        <Space />
        <Button title='Upload' onPress={()=>this.handleUpload()}/>
        <Space />
        <Space />
        <Text style={styles.text}>IPFS: {ipfs}</Text>
        <Text style={styles.text}>ADDRESS: {this.state.walletAddress}</Text>
        <Space />
        <Text style={styles.text}>SET SIGNER ADDRESS</Text>
        <TextInput
          style={{height:40,borderWidth:1,borderColor:'gainsboro',padding:5}}
          onChangeText={(text) => this.setState({inputAddress:text})}
          value={this.state.inputAddress}
        />
        <Space />
        <Button title='Set Signer Address' onPress={()=>this.handleSetWalletAddress()}/>
        <Space />
        <Button disabled={disableGenerate} title='Generate Token' onPress={()=>this.handleGenerateToken()}/>
      </View>
    );
  }


}

