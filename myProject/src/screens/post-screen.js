import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

// Create Posts Screen
const PostsScreen = () => {
  const [posts, setPosts] = useState([]);

  // Get Pots Data With axios from url
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {posts.map((item) => {
          //defined fields to be used of the posts (e.g:posts title)
          return (
            <View key={item.id} style={styles.postContainer}>
              <View style={styles.id}>
                <Text style={styles.idText}>{item.id}</Text>
              </View>
              <View style={styles.postInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.info}>{item.body}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE6CE",
    flex: 1,
    alingItems: "center",
  },
  postContainer: {
    alingItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#de6262",
    margin: "1%",
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: "10%",
  },
  info: {
    color: "black",
    fontWeight: "500",
    fontSize: 12,
    marginLeft: "10%",
    textAlign: "auto",
  },
  postInfo: {
    width: "80%",
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
