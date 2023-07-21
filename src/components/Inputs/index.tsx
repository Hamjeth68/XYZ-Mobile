import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

interface CustomInputProps extends TextInputProps {
  icon?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ icon, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      {icon && <Icon name={icon} style={styles.icon} />}
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: wp(85),
  },
  input: {
    flex: 1,
    marginLeft: 10,
    
  },
  icon: {
    fontSize: 20,
    color: '#555',
  },
});

export default CustomInput;
