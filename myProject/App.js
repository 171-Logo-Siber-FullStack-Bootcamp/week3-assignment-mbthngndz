import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/login-screen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dffde3',
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection:"column",
    paddingTop:"10%"
  },
});
