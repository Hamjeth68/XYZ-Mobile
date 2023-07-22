import { View, Modal } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NativeSyntheticEvent } from "react-native";

const LoadingModal = (props: {
  visible?: boolean;
  onRequestClose?: ((event: NativeSyntheticEvent<any>) => void) | undefined;
  transparent?: boolean;
}) => {
  const { visible, onRequestClose, transparent } = props;
  return (
    <Modal
      visible={visible}
      statusBarTranslucent
      transparent={transparent}
      onRequestClose={onRequestClose}
      animationType="fade"
    >
      <View
        style={{
          alignItems: "center",
          flex: 1,
          backgroundColor: "rgba(0, 0, 0,0.3)",
        }}
      >
        <View
          style={{
            marginTop: hp(40),
            alignSelf: "center",
            backgroundColor: "rgba(256,256,256,0.5)",
            borderRadius: 10,
          }}
        >
          <AnimatedLottieView
            style={{
              height: hp(10),
            }}
            source={require("../../assets/animation/loading-gray.json")}
            autoPlay
            speed={0.9}
            loop={true}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;