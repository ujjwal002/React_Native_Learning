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

function App(): JSX.Element {
  const [name, setName] = useState('');

  const [todoList, setTodoList] = useState([]);
  function addtext(text: string): void {
    console.log(text);

    setName(text);
  }
  function addList(): void {
    if (name !== '') {
      setTodoList([...todoList, name]);
      setName('');
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Add your to do" onChangeText={addtext} />
        <Button title="Add todo" onPress={addList} />
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
          return <Text style={styles.todoStyle}>{todoItem.item}</Text>;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  todoStyle: {
    margin: 40,
  },
  todoList: {
    height: '85%',
  },
});

export default App;
