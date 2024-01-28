import { View, Text } from 'react-native'
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { COLORS, SIZES } from '../../constants';
import { Feather } from '@expo/vector-icons';

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
      <View style={{width:'45%',height:100,padding:10,backgroundColor:COLORS.secondary,borderRadius:20,display:'flex',flexDirection:'row',align:'center'}}>
        <View style={{padding:5,backgroundColor:'blue',borderRadius:100,alignItems:'center',justifyContent:'center'}}>
          <Feather name="trending-up" size={24} color="green"/>
        </View>
        <Text>sasa</Text>
      </View>
      <View style={{width:'45%',height:100,padding:10,backgroundColor:COLORS.secondary,borderRadius:20}}>
        <Text>sasa2</Text>
      </View>
    </View>
  </View>
  )
}

