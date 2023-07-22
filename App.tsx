import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Routes from '@/components/Navigation/Routes';
import GPSLocation from '@/components/GPSLocation';
import { Provider as PaperProvider } from "react-native-paper";
import BottomTabNavigation from '@/components/Navigation/Tabs/BottomTabNavigation';
import BottomTabComponent from '@/components/Navigation/Tabs/BottomTabNavigation';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="light" />
      <Routes />
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
