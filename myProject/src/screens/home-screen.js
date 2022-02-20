import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../firebase-auth";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleSignOut = () => {
    const { navigate } = this.props.navigation;
    auth
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      // Using react-natives built in components.
      <View style={this.styles.container}>
        <Text>Welcome</Text>
        <Text>Dear: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={this.handleSignOut} style={this.styles.button}>
          <Text style={this.styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: "red",
      width: "60%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 40,
    },
    buttonText: {
      color: "white",
      fontWeight: "700",
      fontSize: 16,
    },
  });

}


