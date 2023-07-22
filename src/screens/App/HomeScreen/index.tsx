import { StyleSheet, Text, TouchableOpacity, View, TextInput, StatusBar } from 'react-native';

import React from 'react';
import { FlatList } from 'react-native';
import ProductCard from '@/components/Cards';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from '@/src/utils/Colors';
import { Feather } from '@expo/vector-icons';
import BannerImage from '@/components/BannerImage';
import SearchBar from '@/components/SearchBar';


export default function HomeScreen() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Add more product items as needed
  ];
  
  return (
    <View style={{flex: 1}}>
        <StatusBar backgroundColor={Colors.theme} barStyle="dark-content" />
           <View style={styles.header}>
        {/* Notification Icon */}
        <Text style={styles.headerLink}> text</Text>
        <TouchableOpacity onPress={() =>{console.log('tin')}}>
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
        
      </View>
      
      <View style={styles.searchBar}>
        
        {/* Your search bar implementation goes here */}
        {/* For example, you can use a TextInput as a search bar */}
        <SearchBar placeholder={'Search For Items'} onSearch={() =>{
            console.log('text')
        }}/>
        
      </View>
       
        <BannerImage imageUrl={'https://picsum.photos/200'} width={wp(100)} height={hp(25)} />

    <View style={styles.container}>
     
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => {
              // Handle product item press here
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.theme,
    paddingTop: 10,
    paddingLeft: wp(6),
    paddingRight: wp(6),
    marginTop: hp(1),
  },
  header: {
  
    shadowColor: "#000",
    shadowOpacity: 0.25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    height: 100,
  },
  headerLink: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: wp(40),
    paddingTop: 40,
    height: 100,
  },

  searchBar: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
  },

});
