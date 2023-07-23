import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Routes from '@/components/Navigation/Routes';
import GPSLocation from '@/components/GPSLocation';
import { Provider as PaperProvider } from "react-native-paper";
import BottomTabNavigation from '@/components/Navigation/Tabs/BottomTabNavigation';
import BottomTabComponent from '@/components/Navigation/Tabs/BottomTabNavigation';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/src/redux/store';

export const STORE_INSTANCE = store;

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <StatusBar style="light" />
        <Routes />
      </PaperProvider>
    </ReduxProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
