
import React from 'react';
import { Image } from 'react-native';

interface AvatarProps {
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100, borderRadius: 50 }} />;
};

export default Avatar;
