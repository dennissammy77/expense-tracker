import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { COLORS, SIZES } from '../../constants';
import { Image } from 'expo-image';
import { Gesture, GestureDetector, GestureHandlerRootView, GestureRootView } from 'react-native-gesture-handler';
import { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
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
  const firstPriority = useSharedValue(1);
  const secondPriority = useSharedValue(0.9);
  const thirdPriority = useSharedValue(0.8);


  return (
    <GestureHandlerRootView>
      <View style={{display:'flex',flex:1,alignItems:'center',marginVertical:25}} onLayout={onLayoutRootView}>
        <CardContainer
          id={2}
          priority={thirdPriority}
          firstPriority={firstPriority}
          secondPriority={secondPriority}
          thirdPriority={thirdPriority}
        />
        <CardContainer
          id={1}
          priority={secondPriority}
          firstPriority={firstPriority}
          secondPriority={secondPriority}
          thirdPriority={thirdPriority}
        />
        <CardContainer
          id={0}
          priority={firstPriority}
          firstPriority={firstPriority}
          secondPriority={secondPriority}
          thirdPriority={thirdPriority}
        />
      </View>
    </GestureHandlerRootView>
  )
}

{/* <View style={{display:'flex',flex:1,alignItems:'center',marginVertical:25}} onLayout={onLayoutRootView}>
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
</View> */}

const CardContainer=({ id, priority, firstPriority, secondPriority, thirdPriority,})=>{
  const yTranslation = useSharedValue(30);
  const rotation = useSharedValue(30);
  const isRightFlick = useSharedValue(true);

  const gesture = Gesture.Pan().onBegin(({absoluteX, translationY}) => {
      yTranslation.value = translationY + 30;
      rotation.value = translationY + 30;
    }).onUpdate(({translationY}) => {
      yTranslation.value = translationY + 30;
      rotation.value = translationY + 30;
    }).onEnd(() => {
      const priorities = [
        firstPriority.value,
        secondPriority.value,
        thirdPriority.value,
      ];

      const lastItem = priorities[priorities.length - 1];

      for (let i = priorities.length - 1; i > 0; i--) {
        priorities[i] = priorities[i - 1];
      }

      priorities[0] = lastItem;

      firstPriority.value = priorities[0];
      secondPriority.value = priorities[1];
      thirdPriority.value = priorities[2];

      yTranslation.value = withTiming(
        30,
        {
          duration: 400,
          easing: Easing.quad,
        },
        () => {
          isRightFlick.value = true;
        },
      );

      rotation.value = withTiming(
        -1280,
        {
          duration: 400,
          easing: Easing.linear,
        },
        () => {
          rotation.value = 30;
        },
      );
    });

    const style = useAnimatedStyle(() => {
      const getPosition = () => {
        switch (priority.value) {
          case 1:
            return 50;
          case 0.9:
            return 75;
          case 0.8:
            return 100;
          default:
            return 0;
        }
      };
  
      return {
        position: 'absolute',
        height: 200,
        width: 325,
        bottom: withTiming(getPosition(), {duration: 500}),
        borderRadius: 8,
        zIndex: priority.value * 100,
        transform: [
          {translateY: yTranslation.value},
          {
            rotate: `${interpolate(
              rotation.value,
              isRightFlick.value ? [30, 100] : [30, -100],
              [0, 4],
            )}rad`,
          },
          {
            scale: withTiming(priority.value, {
              duration: 250,
              easing: Easing.linear,
            }),
          },
        ],
      };
    });
  return(
    <GestureDetector gesture={gesture}>
      <Card id={id} style={style} />
    </GestureDetector>
  )
}