import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Card from './Card';

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
    <View style={{display:'flex',flex:1,alignItems:'center',marginVertical:5}} onLayout={onLayoutRootView}>
      <Card />
    </View>
  )
}