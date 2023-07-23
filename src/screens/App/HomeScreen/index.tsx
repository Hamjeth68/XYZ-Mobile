import { StyleSheet, Text, TouchableOpacity, View, TextInput, StatusBar, Image, Platform, PermissionsAndroid, Alert } from 'react-native';

import React, { useState, useEffect } from 'react';
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
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import { useAppDispatch, useAppSelector } from '@/src/redux/stateHooks';
import { getUserInfo, selectProduct } from '@/src/redux/reducer/productSlice';




export default function HomeScreen({navigation}: any) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  
 
  const dispatch = useAppDispatch();
  const productData = useAppSelector(selectProduct);

  

 
  console.log('productData', productData?.products[0].images[0].url)
  const page = 2;
  useEffect(() => {
    dispatch<any>(getUserInfo(page));
  }, [dispatch, page])
  const getLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const grantedAndroid = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to provide location information.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (grantedAndroid === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          setErrorMsg('Location permission denied');
        }
      } else {
        getLocation();
      }
    } catch (err) {
      setErrorMsg('Error while requesting location permission');
    }
  };


  


  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position: { coords: React.SetStateAction<null>; }) => {
        setLocation(position.coords);
      },
      (error: { message: string; }) => {
        setErrorMsg('Error getting location: ' + error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    getLocationPermission();
  }, []);
  

  const productsInfo = [
    {
      id: 1,
      name: productData?.products[0].name,
      description: productData?.products[0].shortDescription,
      imageUrl: productData?.products[0].images[0].url,
    },
    {
      id: 1,
      name: productData?.products[1].name,
      description: productData?.products[1].shortDescription,
      imageUrl:  productData?.products[1].images[0].url,
    },
    {
      id: 2,
      name: productData?.products[2].name,
      description:  productData?.products[2].shortDescription,
      imageUrl: productData?.products[2].images[0].url,
    },
    {
      id: 3,
      name:   productData?.products[3].name,
      description: productData?.products[3].shortDescription,
      imageUrl: productData?.products[3].images[0].url,
    },
    {
      id: 4,
      name: productData?.products[4].name,
      description: productData?.products[4].shortDescription,
      imageUrl: productData?.products[4].images[0].url,
    },
    // Add more product items as needed
  ];

  return (
    <View style={{ flex: 1 }}>
      
      <StatusBar backgroundColor={Colors.theme} barStyle="dark-content" />
      
      {/* <View style={styles.locationView}>
      {errorMsg ? (
        <Text style={styles.locationText}>{errorMsg}</Text>
      ) : location ? (
        <View >
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      </View> */}
      <View style={styles.header}>
        {/* <Text style={styles.headerLink}> text</Text> */}
        <TouchableOpacity onPress={() => { console.log('tin') }}>
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
     
      </View>
      <View style={styles.searchBar}>
        <SearchBar placeholder={'Search For Items'} onSearch={() => {
          console.log('text')
        }} />
      </View>
      <Image source={require('../../../assets/images/offer2.jpg')} style={{ width: wp(100), height: hp(25), backfaceVisibility: 'hidden' }} />
      <View style={styles.container}>
      <Text style={styles.refText}>Recommended For You</Text>    
      <FlatList
          data={productsInfo}
          renderItem={({ item, index }) => (
            <ProductCard
            key={index}
             products={item}
              onPress={() => {
               
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
  locationView:{
    justifyContent: 'flex-start',
  },
  locationText:{
    paddingTop: wp(10.9),
  },
  container: {
    flex: 1,
    backgroundColor: Colors.theme,
    paddingTop: 10,
    paddingLeft: wp(6),
    paddingRight: wp(6),
  },
  refText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    paddingTop: 10,
  },
  refText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    paddingTop: 10,
    justifyContent: 'flex-end',
  },

  header: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    shadowColor: "#808080",
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
