import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  BottomTabComponent: undefined;
 
};
export type DiscoverBottomTabParamList = {
    ServicesScreen: undefined;
    MessagesScreen: undefined;
    CartScreen: undefined;
    ProfileScreen: undefined;
    HomeScreen: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>;