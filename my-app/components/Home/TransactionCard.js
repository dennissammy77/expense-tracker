import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export default function TransactionCard() {

    const [fontsLoaded, fontError] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
      });
  
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
  
      if (!fontsLoaded && !fontError) {
        return null;
      }

  return (
    <View style={{display:'flex',flexDirection:'row',alignItems:'center',borderRadius:20,backgroundColor:COLORS.secondary,padding:10,marginVertical:6}}>
        <View style={{padding:10,backgroundColor:'#c4c4c4',borderRadius:100,alignItems:'center',justifyContent:'center'}}>
            <MaterialCommunityIcons name="food-apple" size={24} color="black" />
        </View>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',flex:1,marginLeft:8}}>
            <View style={{flex:1}}>
                <Text style={{fontSize:SIZES.large,fontFamily:'Poppins-Bold'}}>Groceries</Text>
                <Text style={{fontSize:SIZES.medium,fontFamily:'Poppins-Bold',color:COLORS.gray2}}>03 Feb 2024</Text>
            </View>
            <Text style={{fontSize:SIZES.medium,fontFamily:'Poppins-Bold'}}>-SH 120.00</Text>
        </View>
    </View>
  )
}