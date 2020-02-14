import React from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import Space from './Space';

const styles = require('./Styles').styles;
const Lib = require('../Lib');

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:'',
      inputAddress:'',
      value:'',
    };
  }

  componentDidMount() {
  }

  handleInput(txt) {
    this.setState({inputValue:txt});
  }

  handleInputAddress(txt) {
    this.setState({inputAddress:txt});
  }

  handleSetStoreValue() {
    const num = this.state.inputValue;
    this.props.onSetStoreValue(num);
  }

  handleSetWalletAddress() {
    const addr = this.state.inputAddress;
    this.props.onSetWalletAddress(addr);
  }

  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.title}>SALDO WALLET</Text>
        <Text style={styles.text}>ADDRESS: {this.props.walletAddress}</Text>
        <Text style={styles.text}>VTHO: {this.props.vtho}</Text>
        <Space />
        <Text style={styles.text}>ENTER WALLET ADDRESS</Text>
        <TextInput
          style={{height:40,borderWidth:1,borderColor:'gainsboro',padding:5}}
          onChangeText={(text) => this.handleInputAddress(text)}
          value={this.state.walletAddress}
        />
        <Space />
        <Button title='Set Wallet Address' onPress={()=>this.handleSetWalletAddress()}/>
        <Space />
        <Space />
        <Text style={styles.title}>STORE VALUE</Text>
        <Text style={styles.text}>VALUE: {this.props.storeValue}</Text>
        <Space />
        <Text style={styles.text}>ENTER NEW VALUE</Text>
        <TextInput
          style={{height:40,borderWidth:1,borderColor:'gainsboro',padding:5}}
          onChangeText={(text) => this.handleInput(text)}
          value={this.state.inputValue}
          keyboardType='numeric'
        />
        <Space />
        <Button title='Save Value' onPress={()=>this.handleSetStoreValue()}/>
        <Space />
        <Button title='Refresh' onPress={()=>this.props.onRefresh()}/>
        <Space />
        <input type="file" name="theFile" />
      </View>
    );
  }


}

