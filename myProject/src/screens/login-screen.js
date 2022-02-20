import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "../../firebase-auth";
import Logo from "./logo";

//Created login screen class from Component

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      userName: "",
      password: "",
    };
  }

  // Added log in function from Firebase Authentication if user have an account
  loginHandler = () => {
    const { navigate } = this.props.navigation;
    auth
      .signInWithEmailAndPassword(this.state.userName, this.state.password)
      .then((uc) => {
        if (uc.user) {
          this.props.navigation.navigate("Main");
        } else {
          console.log("There is no such user");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // If there is no account then navigate to register screen
  dontHaveAnAccount = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    return (
      <KeyboardAvoidingView style={this.styles.container}>
        <View style={this.styles.inputGroupContainer}>
          <Logo />
          <TextInput
            style={this.styles.input}
            // Added place holder for good user experience
            placeholder={"Email"}
            value={this.state.userName}
            onChangeText={(text) => {
              this.setState({
                userName: text,
              });
            }}
          ></TextInput>
          <TextInput
            style={this.styles.input}
            // Added place holder for good user experience
            placeholder={"Password"}
            value={this.state.password}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          ></TextInput>
          <View style={this.styles.buttonContainer}>
            <TouchableOpacity
              onPress={this.loginHandler}
              style={this.styles.button}
            >
              <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.dontHaveAnAccount}
              style={this.styles.button}
            >
              <Text>Don't have an account?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: "#EEE6CE",
    },
    input: {
      backgroundColor: "white",
      paddingHorizontal: 35,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
    },
    txtInput: {
      backgroundColor: "white",
      placeholder:10,
    },
    buttonContainer: {
      width: "60%",
      justifyContent: "center",
      paddingHorizontal: 25,
      alignItems: "center",
      marginTop: 50,
    },
    button: {
      backgroundColor: "#dbd6c1",
      width: "100%",
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
    },
    inputGroupContainer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      marginTop: "30%",
      marginLeft: 0,
      backgroundColor: "#de6262",
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
    },
  });
}
