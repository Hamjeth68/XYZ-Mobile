import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, SafeAreaViewComponent } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '@/components/Inputs';
import Avatar from '@/components/Avatar';
import MainButton from '@/components/Button';
import { styles } from "./styles";
import { isIos } from '@/src/utils/Helpers';
import { SCREEN_HEIGHT, SCREEN_WIDTH, normalize } from '@/src/utils/scalling';
import { AuthStackScreenProps } from "@/models/Navigation-Modal";
import LoadingModal from '@/components/LoadingModal';

const  LoginScreen = ({ navigation }: AuthStackScreenProps<"LoginScreen">)  =>{
    const [loading, setLoading] = useState(false);

    const onPressSubmit = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("BottomTabComponent");
        }, 2000);
      };

    return (
        <ScrollView keyboardShouldPersistTaps="always"
            keyboardDismissMode="on-drag"
            contentContainerStyle={{
                height: isIos ? SCREEN_HEIGHT / 1.15 : SCREEN_HEIGHT / 1.1,
                paddingLeft: normalize(16),
                paddingRight: normalize(16),
                zIndex: 1000,
                overflow: 'hidden',
            }}>
            <View style={styles.root}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.loginContainer}>
                        <Image style={{height: 200, width: 200}} source={require('../../../assets/images/log.png')}/>
                        <Text style={styles.title}>Welcome</Text>

                        <CustomInput icon="email" placeholder="Username" />
                        <View style={styles.input}>
                            <CustomInput icon="lock" placeholder="Password" />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <MainButton label='Login' onPress={() =>{
                            onPressSubmit();
                        }} />
                    </View>
                </ScrollView>
                <LoadingModal transparent visible={loading} />
            </View>
        </ScrollView>
    );
}

export default LoginScreen;


