import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Routes from '@/components/Navigation/Routes';



export default function App() {
  return (
    
      <Routes />
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
