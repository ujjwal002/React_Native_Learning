/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, StyleSheet, TextInput,Button, Text} from 'react-native';
function ColorGenerator(): JSX.Element {
  const [color,setColor] = useState('Black');
  const [realColor,setRealColor] = useState('');
  function changeColor(text:string):void {
    setColor(text);
  }
  function ChangeRealColor():void{
    setRealColor(color);
    console.log(color);
  }
  return (
    <View style={styles.container}>
      <View style={styles.conatainer_color}>
        <Text>{realColor}</Text>
      </View>
      <TextInput  placeholder="Enter the color name" onChangeText={changeColor} value={color}/>
      <Button title="Changecolor" onPress={ChangeRealColor}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    justifyContent:'center',
    textAlign:'center',
    marginTop: 50,
  },
  conatainer_color: {
    width: '100%',
    height: '80%',
    backgroundColor:'red',
    color: 'black',
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
  },
});

export default ColorGenerator;
