import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { COLORS, SIZES } from '../../constants';
import { Image } from 'expo-image';
import { Gesture, GestureDetector, GestureRootView } from 'react-native-gesture-handler';
import { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
SplashScreen.preventAutoHideAsync();

export default function Overview() {
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
    <View style={{display:'flex',flex:1,alignItems:'center',marginVertical:25}} onLayout={onLayoutRootView}>
      <View style={{borderRadius:30,padding:30,height:200,width:'100%',zIndex:0,backgroundColor:'#292c31',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <Text style={{fontSize:SIZES.xxLarge,fontWeight:'bold',color:COLORS.white,fontFamily:'Poppins-Bold'}}>Wallet</Text>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View>
            <Text style={{fontSize:SIZES.medium,fontWeight:'300',color:COLORS.white,marginVertical:10}}>Total balance</Text>
            <Text style={{fontSize:SIZES.xLarge,fontWeight:'bold',color:COLORS.white,fontFamily:'Poppins-Bold'}}>Ksh 1,000,000</Text>
          </View>
          <Image
            source={require('../../assets/images/coin_img.png')}
            contentFit="cover"
            transition={1000}
            style={{width:100,height:100}}
          />
        </View>
      </View>
      <View style={{borderRadius:30,padding:30,height:200,width:'95%',backgroundColor:'#836ee7',marginTop:-208,zIndex:-10}}>
        <Text>Overview</Text> 
      </View>
      <View style={{borderRadius:30,padding:30,height:200,width:'85%',backgroundColor:'#Cac3ee',marginTop:-210,zIndex:-20}}>
        <Text>Overview</Text> 
      </View>
    </View>
  )
}
