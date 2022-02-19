import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StatusBar } from "expo-status-bar";
import LoginScreen from "./src/screens/login-screen";
import MainScreen from "./src/screens/main-screen";
import RegisterScreen from "./src/screens/register-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dffde3",
    // alignItems: "center",
    // justifyContent: 'center',
    flexDirection: "column",
    // paddingTop: "10%",
  },
  oval: {
    borderWidth: 1.5,
    borderColor: "#023e0a",
    backgroundColor: "white",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 50,
    width: "100%",
    height: 200,
  },
});

// import LoginScreen from './src/screens/login-screen';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <LoginScreen></LoginScreen>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
