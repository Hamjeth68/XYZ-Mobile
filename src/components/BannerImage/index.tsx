// components/BannerImage.tsx

import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface BannerImageProps {
    imageUrl: string;
    width?: number;
    height?: number;
    borderRadius?: number;
    paddingLeft?: number;
    paddingRight?: number;

}

const BannerImage: React.FC<BannerImageProps> = ({ imageUrl, width, height, borderRadius, paddingLeft, paddingRight }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={{ width: width, height: height, borderRadius: borderRadius, paddingLeft: paddingLeft, paddingRight: paddingRight }} />
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        flexDirection: 'row',  // You can adjust the height as per your requirement
    },
    image: {
        flex: 1,
    },
});

export default BannerImage;
