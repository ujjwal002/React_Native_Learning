/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

function App(): JSX.Element {
  var name = 'ujjwal kumar';
  return (
    <View>
      <Text style={{fontSize: 40}}>You are going to grow</Text>
      <Text style={{fontSize: 80, color: 'red'}}>hello i am ujjwal</Text>
      <Text style={styles.container}>{name}</Text>
      <Button title="press me" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
  },
});

export default App;
