import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from "./tab";
import HomeScreen from '../screens/home-screen'
import PostsScreen from '../screens/post-screen'
import TodoScreen from '../screens/todo-screen'

// Create Drawer Navigator 
const Drawer = createDrawerNavigator();


// Create Custom Drawer Navigator
const Drawers = () => {
  // Tab menu's component is called for using together with drawer navigator
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Tabs}/>  
        <Drawer.Screen name="Posts" component={PostsScreen} />
        <Drawer.Screen name="Todos" component={TodoScreen} />
        <Drawer.Screen name="Sign Out" component={HomeScreen} />
      </Drawer.Navigator>
  );
}

export default Drawers;