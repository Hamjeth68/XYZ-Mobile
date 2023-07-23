import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Platform } from 'react-native';
import ServicesScreen from '@/screens/App/ServicesScreen';
import MessagesScreen from '@/screens/App/MessagesScreen';
import CartScreen from '@/screens/App/CartScreen';
import ProfileScreen from '@/screens/App/ProfileScreen';
import HomeScreen from '@/screens/App/HomeScreen';
import { DiscoverBottomTabParamList } from '@/models/Navigation-Modal';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const Tab = createBottomTabNavigator<DiscoverBottomTabParamList>();

const BottomTabComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#D9D9D9",
        tabBarInactiveTintColor: "#000",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#b3b3b3",
          borderTopWidth: Platform.OS == "ios" ? 1.5 : 3,
          height: Platform.OS == "ios" ? hp(12) : hp(10),
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <Ionicons
                name="home-outline"
                size={Platform.OS == "ios" ? 25 : 35}
                color={color}
              />
              <Text style={[styles.tabIconText, { color: color }]}>
                Services
              </Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name='ServicesScreen'
        component={ServicesScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <Ionicons
                name="search-outline"
                size={Platform.OS == "ios" ? 25 : 35}
                color={color}
              />
              <Text style={[styles.tabIconText, { color: color }]}>
                Search
              </Text>
            </View>
          )
        })}
      />
      <Tab.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <Ionicons
                name="mail-outline"
                size={Platform.OS == "ios" ? 25 : 35}
                color={color}
              />
              <Text style={[styles.tabIconText, { color: color }]}>
                Messages
              </Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <Ionicons
                name="laptop-sharp"
                size={Platform.OS == "ios" ? 25 : 35}
                color={color}
              />
              <Text style={[styles.tabIconText, { color: color }]}>Scenes</Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <Ionicons
                name="list"
                size={Platform.OS == "ios" ? 25 : 35}
                color={color}
              />
              <Text style={[styles.tabIconText, { color: color }]}>
                Curation
              </Text>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconView: {
    alignItems: "center",
  },
  tabIconText: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: Platform.OS == "ios" ? RFValue(9) : RFValue(11),
    fontWeight: "500",
  },
});

export default BottomTabComponent;
