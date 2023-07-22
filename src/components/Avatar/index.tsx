
import React from 'react';
import { Image } from 'react-native';

interface AvatarProps {
  imageUrl: string;
  width?: number;
    height?: number;
    borderRadius?: number;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, width, height, borderRadius }) => {
  return <Image source={{ uri: imageUrl }} style={{ width: width, height: height, borderRadius: borderRadius }} />;
};

export default Avatar;
