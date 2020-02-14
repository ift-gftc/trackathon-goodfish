import React from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import Space from './Space';
import QrReader from 'react-qr-reader';

const styles = require('./Styles').styles;
const Lib = require('../Lib');

export default class WebcamReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scannedVal:''
    };
  }

  handleScan(data) {
    console.log(data);

    if(data && data.length > 0) {
      this.setState({scannedVal:data});
      window.open(data, '_blank');
    }
  }

  handleError(err) {
    
  }

  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.title}>IDENTIFY FISH BY QRCODE</Text>
        <Text style={styles.text}>Detected: {this.state.scannedVal}</Text>
        <Text style={styles.text}>Please show the right format:</Text>
        <QrReader
          delay={300}
          onError={e=>this.handleError(e)}
          onScan={data=>this.handleScan(data)}
          style={{ width: '100%' }}
        />
        <Space />
      </View>
    );
  }


}

