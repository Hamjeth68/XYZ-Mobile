import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface Product {
  id?: number | undefined;
  name?: string | undefined;
  description?: string | undefined;
  url?: string | undefined;
}

interface ProductCardProps {
  products: Product;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ products, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: products.url }} style={styles.image} />
      <Text style={styles.name}>{products.name}</Text>
      <Text style={styles.description}>{products.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    padding: 10,
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default ProductCard;
