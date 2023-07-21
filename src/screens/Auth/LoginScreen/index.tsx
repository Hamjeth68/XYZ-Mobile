import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomInput from '@/components/Inputs';
import Avatar from '@/components/Avatar';
import MainButton from '@/components/Button';
import { styles } from "./styles";


export default function LoginScreen() {
    return (
        <View style={styles.root}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.loginContainer}>
                    <Text style={styles.title}>Welcome</Text>
            
                    <CustomInput icon="email" placeholder="Username" />
                   <View style={styles.input}>  
                   <CustomInput icon="lock" placeholder="Password" />
                   </View>
                </View>
               <View style={styles.buttonContainer}>
               <MainButton label='Login' onPress={() => console.log('log')} />
               </View>
            </ScrollView>
        </View>
    );
}


