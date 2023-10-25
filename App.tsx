/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {useState} from 'react';
import ColorGenerator from './components/ColorGenerator';
import Test from './components/Test';

function App(): JSX.Element {
  const [name, setName] = useState('');

  const [todoList, setTodoList] = useState([]);
  function addtext(text: string): void {
    console.log(text);

    setName(text);
  }
  function addList(): void {
    if (name !== '') {
      setTodoList([...todoList, {name, key: Math.random().toString()}]);
      setName('');
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Add your to do"
          onChangeText={addtext}
          value={name}
        />
        <Button title="Add todo" color={'black'} onPress={addList} />
      </View>
      {/* <ScrollView>
        {todoList.map(todo => (
          <Text style={styles.todoStyle}>{todo}</Text>
        ))}
      </ScrollView> */}
      {/* optimized way to load list bcz in scroll view this load the data at once this will slow the list so we use flatlist */}
      <FlatList
        style={styles.todoList}
        data={todoList}
        renderItem={todoItem => {
          return <Text style={styles.todoStyle}>{todoItem.item.name}</Text>;
        }}
      />
      <ColorGenerator />
      <Test />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  todoStyle: {
    padding: 40,
    backgroundColor: 'red',
    color: 'white',
    margin: 20,
  },
  todoList: {
    height: '0%',
  },
});

export default App;
