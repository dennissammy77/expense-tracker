import { View, Text } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Salutations = () => {
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
      <Text style={{fontSize:SIZES.medium,color:COLORS.gray,fontFamily: 'Poppins-Bold'}}>Good evening,</Text>
      <Text style={{fontSize:SIZES.xxLarge,color:COLORS.primary,fontFamily: 'Poppins-Bold'}}>Dennis Sammy</Text>
    </View>
  )
}

export default Salutations