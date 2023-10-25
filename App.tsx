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

import Navbar from './components/Navbar';

function App(): JSX.Element {
  // const [name, setName] = useState('');

  // const [todoList, setTodoList] = useState([]);
  // function addtext(text: string): void {
  //   console.log(text);

  //   setName(text);
  // }
  // function addList(): void {
  //   if (name !== '') {
  //     setTodoList([...todoList, {name, key: Math.random().toString()}]);
  //     setName('');
  //   }
  // }
  return (
    // <View style={styles.container}>
    //   <View>
    //     <TextInput
    //       placeholder="Add your to do"
    //       onChangeText={addtext}
    //       value={name}
    //     />
    //     <Button title="Add todo" color={'black'} onPress={addList} />
    //   </View>
    //   /
    //   <FlatList
    //     style={styles.todoList}
    //     data={todoList}
    //     renderItem={todoItem => {
    //       return <Text style={styles.todoStyle}>{todoItem.item.name}</Text>;
    //     }}
    //   />
    // </View>
    <Navbar />
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
    height: '85%',
  },
});

export default App;
