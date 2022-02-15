import React, { Component } from "react";
import { View, Text } from "react-native";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log("constructor çalıştı");
  }

  componentDidMount(){
      console.log("component yüklenmiş olur")
  }

  render() {
    return (
      <View>
        <Text> MyComponent </Text>
      </View>
    );
  }
}

export default LoginScreen;
