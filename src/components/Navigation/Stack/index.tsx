import HomeScreen from '@/screens/App/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { AuthStackParamList } from '@/models/Navigation-Modal';
import LoginScreen from '@/screens/Auth/LoginScreen';



const Stack = createNativeStackNavigator<AuthStackParamList>();


const AuthStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
         <Stack.Screen name="LoginScreen" component={LoginScreen} />
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    );
  };
  
  export default AuthStack;