import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home-screen'
import PostsScreen from '../screens/post-screen'
import TodoScreen from '../screens/todo-screen'
import Ionicons from 'react-native-vector-icons/Ionicons';
// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();


// Create Custom Tab Navigator
const Tabs = () => {

  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === "Posts") {
              iconName = focused ? 'options' : 'options-outline';

            } else if (rn === "Todos") {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: "brown",
        })}>

        <Tab.Screen name="Home" component={HomeScreen} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="Todos" component={TodoScreen} />

      </Tab.Navigator>
  );
}

export default Tabs;