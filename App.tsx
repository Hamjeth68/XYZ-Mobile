import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import React from 'react';
import CustomInput from '@/components/Inputs';
import Avatar from '@/components/Avatar';
import LoginScreen from '@/screens/Auth/LoginScreen';



export default function App() {
  return (
    
      <LoginScreen />
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
