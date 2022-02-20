import React, {useEffect, useState}  from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import axios from "axios";

// Create Todo Screens
const PostsScreen = () =>{
  const [todos,setTodos] = useState([])

// Get JSON Data
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response=>setTodos(response.data))
      .catch(error=>console.log(error));
  },[]);
  return (

    <View style={styles.container}>
      <ScrollView>
      {
        // Create Custom Table View
        todos.map((item)=>{
          return (
            <View key={item.id} style={styles.postContainer}>
                <View style={styles.id}>
                <Text style={styles.idText}>{item.id}</Text>
                </View>
                <View style={styles.postInfo}>
                  <Text style={item.completed.toString() === "true" ? styles.completedTitle : styles.notCompletedTitle}>{item.title}</Text>
                </View>
             </View>
              
          )
        })
      }
      </ScrollView>
    </View>

    
  )
}
export default PostsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      paddingBottom: 20,
      backgroundColor: '#fff',
    },
    item: {
      flex: 1,
      marginHorizontal: 10,
      marginTop: 24,
      padding: 10,
      backgroundColor: '#bec1c0',
      fontSize: 15,
      textTransform: 'capitalize'
    },
  });
