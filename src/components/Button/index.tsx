import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { RFValue } from "react-native-responsive-fontsize";
import Colors from "@/src/utils/Colors";

interface ButtonProps {
  label: string;
  onPress: () => void;
}
const MainButton: React.FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.view} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    borderColor: Colors.themeText1,
    backgroundColor: Colors.yellow,
    borderWidth: 0,
    borderRadius: hp(1.5),
    alignItems: "center",
    paddingTop: hp(1.6),
    paddingBottom: hp(1.6),
    marginLeft: wp(5),
    marginRight: wp(5.5),
    marginTop: hp(1),
    marginBottom: hp(3),
    width: wp(85),
  },
  text: {
    fontSize: RFValue(15),
    color: Colors.theme,
    fontWeight: "bold",
  },
});

export default MainButton;