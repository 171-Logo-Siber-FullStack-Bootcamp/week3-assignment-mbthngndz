import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../firebase-auth";
// import Logo from './logo';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // console.log("Constructor çalıştı");
    this.state = {
      userName: "",
      password: "",
    };
  }


  loginHandler = () => {
    console.log("proplar ", this.props);
    const { navigate } = this.props.navigation;
    console.log("navigasyon", navigate);
    auth
      .signInWithEmailAndPassword(this.state.userName, this.state.password)
      .then((uc) => {
        if (uc.user) {
          this.props.navigation.navigate("MainScreen");
        } else {
          console.log("Kullanıcı bulunamadı");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  dontHaveAnAccount = () => {
    this.props.navigation.navigate("Register");
  }

  render() {
    return (
      <View>
        {/* <Logo/> */}
        <View style={this.styles.imageArea}></View>
        <TextInput
          style={this.styles.txtInput}
          placeholder={"Email"}
          value={this.state.userName}
          onChangeText={(text) => {
            this.setState({
              userName: text,
            });
          }}
        ></TextInput>
        <TextInput
          style={this.styles.txtInput}
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
            <Text>Giriş</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.dontHaveAnAccount}>
            <Text>Dont have an account</Text>
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
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-around",
    },
    button: {
        // backgroundColor: '#2EB086',
        width: "100%",
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
      },
    imageArea: {
      paddingTop: "50%",
    },
  });

}
