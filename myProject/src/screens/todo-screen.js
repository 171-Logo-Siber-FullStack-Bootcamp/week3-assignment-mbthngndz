import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";


// Create Todos Screen
const TodoScreen = () => {
  const [todos, setTodos] = useState([]);

  // Get Pots Data With axios from url
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          // Create Custom Table View
          todos.map((item) => {
            return (
              //defined fields to be used of the todos (e.g:todos id)
              <View key={item.id} style={styles.todoContainer}>
                <View style={styles.id}>
                  <Text style={styles.idText}>{item.id}</Text>
                </View>
                <View key={item.title} style={styles.todosInfo}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            );
          })
        }
      </ScrollView>
    </View>
  );
};
export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE6CE",
    flex: 1,
    alingItems: "center",
  },
  todoContainer: {
    alingItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#de6262",
    margin: "1%",
    flexDirection: "row",
  },
  title: {
    color: "black",
    fontWeight: "700",
    fontSize: 20,
    marginLeft: "10%",
  },

  todosInfo: {
    width: "80%",
    color: "black",
  },
  id: {
    width: "%20",
    alingItems: "center",
    justifyContent: "center",
  },
  idText: {
    color: "#EEE6CE",
    fontWeight: "700",
    fontSize: 36,
  },
});
