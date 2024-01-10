import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';
import FeatureScreen from './src/screen/FeatureScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
   return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='To-Do-List'
            component={TodoScreen}
          />
          <Stack.Screen 
            name='Details Of Todo'
            component={FeatureScreen}
          />
        </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({});
