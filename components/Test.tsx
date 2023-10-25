/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const Test = () => {
  const [inputColor, setInputColor] = useState(''); // State to track the input color
  const [viewStyle, setViewStyle] = useState({backgroundColor: 'white'});

  const handleInputChange = text => {
    setInputColor(text);
  };

  const applyColor = () => {
    // Validate the input color (you can add more validation logic)
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(inputColor)) {
      setViewStyle({backgroundColor: inputColor});
    } else {
      console.error("hello")
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a color (hex code)"
        onChangeText={handleInputChange}
      />
      <Button title="Apply Color" onPress={applyColor} />
      <View style={[styles.colorBox, viewStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  colorBox: {
    width: 100,
    height: 100,
  },
});

export default Test;
