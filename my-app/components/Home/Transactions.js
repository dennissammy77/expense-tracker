import { View, Text } from 'react-native'
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { COLORS, SIZES } from '../../constants';
import { Feather } from '@expo/vector-icons';
import TransactionCard from './TransactionCard';

export default function Transactions() {
    const [fontsLoaded, fontError] = useFonts({
      'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
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
  <View onLayout={onLayoutRootView}>
    <Text style={{fontSize:SIZES.large,color:COLORS.primary,fontFamily: 'Poppins-Bold'}}>Transactions</Text>
    <View style={{display:'flex',flexDirection:'row',width:'full',justifyContent:'space-between'}}>
      {/**Income */}
      <View style={{flex:1,marginRight:4,height:100,padding:10,backgroundColor:COLORS.secondary,borderRadius:20,display:'flex',flexDirection:'row',alignItems:'center'}}>
        <View style={{padding:10,backgroundColor:'#dffce8',borderRadius:100,alignItems:'center',justifyContent:'center'}}>
          <Feather name="trending-up" size={24} color="#57e299"/>
        </View>
        <View style={{marginLeft:10}}>
          <View style={{display:'flex',flexDirection:'row',fontWeight:'bold'}}>
            <Text style={{fontWeight:'bold',fontSize:SIZES.xLarge,fontFamily:'Poppins-Bold',color:'#57e299'}}>+</Text>
            <Text style={{fontWeight:'bold',fontSize:SIZES.xLarge,fontFamily:'Poppins-Bold',color:'#57e299'}}>24%</Text>
          </View>
          <Text style={{fontSize:SIZES.medium}}>Income</Text>
        </View>
      </View>
      {/**Expense */}
      <View style={{flex:1,height:100,padding:10,backgroundColor:COLORS.secondary,borderRadius:20,display:'flex',flexDirection:'row',alignItems:'center'}}>
        <View style={{padding:10,backgroundColor:'#fbf2d7',borderRadius:100,alignItems:'center',justifyContent:'center'}}>
          <Feather name="trending-up" size={24} color="#eda416"/>
        </View>
        <View style={{marginLeft:10}}>
          <View style={{display:'flex',flexDirection:'row',fontWeight:'bold'}}>
            <Text style={{fontWeight:'bold',fontSize:SIZES.xLarge,fontFamily:'Poppins-Bold',color:'#eda416'}}>-</Text>
            <Text style={{fontWeight:'bold',fontSize:SIZES.xLarge,fontFamily:'Poppins-Bold',color:'#eda416'}}>42%</Text>
          </View>
          <Text style={{fontSize:SIZES.medium}}>Expense</Text>
        </View>
      </View>
    </View>
    {/**Transactions*/}
    <TransactionCard/>
  </View>
  )
}