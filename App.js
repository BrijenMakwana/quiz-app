
import { StyleSheet, Text, View } from 'react-native';
import QuizScreen from "./Screens/QuizScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator scr>
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                  title: "Select Category" ,
                  headerStyle: {
                      backgroundColor: '#3c6e71',
                  },
                  headerTintColor: '#fff',
          }}
          />
          <Stack.Screen name="Quiz" component={QuizScreen} options={{
              headerShown: false,
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
