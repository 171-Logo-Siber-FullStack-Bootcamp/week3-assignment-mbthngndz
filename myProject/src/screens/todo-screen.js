import React, {useEffect, useState}  from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import axios from "axios";

// Create Todo Screens
const TodoScreen = () =>{
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
export default TodoScreen


const styles = StyleSheet.create({
    container: {
      backgroundColor: "#EEE6CE",
      flex: 1,
      alingItems: "center",
    },
    postContainer:{
      alingItems: "center",
      justifyContent:"center",
      padding: 20,
      backgroundColor: "#313552",
      margin:"1%",
      flexDirection:"row"
    },
    completedTitle: {
      color: "#2EB086",
      fontWeight: '700',
      fontSize: 20,
      marginLeft: "10%"
    },
    notCompletedTitle: {
      color: "#B8405E",
      fontWeight: '700',
      fontSize: 20,
      marginLeft: "10%"
    },
    info:{
      color: "gray",
      fontWeight: '500',
      fontSize: 12,
      marginLeft:"10%",
      textAlign: "auto"
    },
    postInfo:{
      width: "80%"
    },
    id:{
      width:"%20",
      alingItems: "center",
      justifyContent:"center",
    },
    idText: {
      color: "#EEE6CE",
      fontWeight: '700',
      fontSize: 36,
    }
  })