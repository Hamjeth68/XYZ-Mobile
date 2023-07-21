import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "@/src/utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  buttonContainer:{
    alignItems: "center",
  },
  scrollView: {
    paddingBottom: hp(5),
  },
  input:{
    marginTop: hp(2),
  },

  title: {
    color: Colors.themeText1,
    fontSize: RFValue(30),
    fontWeight: "bold",
    marginLeft: wp(5),
    marginTop: hp(1),
    textAlign: "center",
  },
  titleView: {
    textAlign: "center",
  },
  logo: {
    width: wp(wp(10)),
    resizeMode: "contain",
    marginLeft: wp(5),
    marginTop: hp(1),
  },
  loginContainer: {
    alignItems: "center",
    marginTop: hp(40),
    marginBottom: hp(4),
  },

  textInput: {
    backgroundColor: "transparent",
    color: "#fff",
    marginLeft: wp(5),
    marginRight: wp(5),
    marginTop: hp(1),
  },

  mainButtonView: {
    backgroundColor: Colors.theme,
    width: wp(90),
    height: hp(6),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  mainButtonText: {
    color: Colors.themeText1,
    fontSize: RFValue(15),
    fontWeight: "bold",
  },

  createAccountContainer: {
    marginLeft: wp(5),
    marginTop: hp(2),
  },
  createAccountText: {
    color: "#F2CD33",
    fontSize: RFValue(15),
    fontWeight: "500",
  },
  accountButtonView: {
    flexDirection: "row",
    marginLeft: wp(5),
    alignItems: "center",
    backgroundColor: Colors.themeText2,
    width: wp(90),
    height: hp(6),
    paddingLeft: wp(15),
    marginTop: hp(1),
  },
  buttonIcon: {
    resizeMode: "contain",
    width: wp(7),
    height: hp(5),
  },
  accountButtonText: {
    color: Colors.themeText1,
    fontSize: RFValue(14),
    fontWeight: "bold",
    marginLeft: wp(6),
  },
});