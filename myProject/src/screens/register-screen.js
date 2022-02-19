import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../firebase-auth";
// import Logo from "./logo";

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
  }

  registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(this.state.userName, this.state.password)
      .then((uc) => {
        if (uc.user) {
          // Geçiş yap
          this.props.navigation.navigate("MainScreen");
        } else {
          console.log("kullanıcı yaratılamadı");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    auth
      .signOut()
      .then(() => {})
      .catch((error) => {});
  };

  haveAnAccount = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View>
        {/* <Logo /> */}
        <View style={this.styles.imageArea}></View>
        <TextInput
          style={this.styles.txtInput}
          value={this.state.userName}
          placeholder={"Email"}
          onChangeText={(text) => {
            this.setState({
              userName: text,
            });
          }}
        ></TextInput>
        <TextInput
          style={this.styles.txtInput}
          value={this.state.password}
          placeholder={"Password"}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        ></TextInput>
        <View style={this.styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.haveAnAccount}
            style={this.styles.button}
          >
            <Text style={this.styles.buttonTextn}>Do you have an account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.registerHandler}
            style={this.styles.button}
          >
            <Text>Kayit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    txtInput: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
    },
    buttonContainer: {
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginTop: 40,
    },
    button: {
      // backgroundColor: '#2EB086',
      width: "100%",
      padding: 10,
      borderRadius: 20,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontWeight: "700",
      fontSize: 16,
    },
    imageArea: {
      paddingTop: "50%",
    },
  });
}
