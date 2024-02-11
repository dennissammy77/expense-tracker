import { Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useState, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { COLORS, SIZES } from '../constants';
import Row from '../components/Input/Row';
import Button from '../components/Input/Button';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function NewExpense() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const [inputArr,setInputArr]=useState([])
  const [Value,set_Value]=useState('0');
  const [outofrangeerr,set_outofrangeerr]=useState(false);
  const HandleInput=(num)=>{
    if (inputArr.length === 11){
      set_outofrangeerr(true);
      return ;
    }
    const tempArr = inputArr;
    tempArr.push(num);
    set_Value(tempArr.join(''))
    setInputArr(tempArr)
  }

  const HandleClear=()=>{
    setInputArr([]);
    set_Value('0');
  }
  return (
    <View style={{ flex: 1, backgroundColor:'#fff',marginTop:60,borderTopLeftRadius:40,borderTopRightRadius:40}} onLayout={onLayoutRootView}>
      {/**Modal header */}
      <View style={{display:'flex',flexDirection:'row',padding:20,alignItems:'center'}}>
        <TouchableOpacity onPress={()=>router.back()}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:SIZES.large,color:COLORS.gray,fontFamily: 'Poppins-Bold'}}>Add Transaction</Text>
        </View>
      </View>
      {/**Body */}
      <View style={{padding:23}}>
        {outofrangeerr?
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',backgroundColor:'orange',padding:5,borderRadius:5,marginVertical:5}}>
          <Entypo name="warning" size={18} color="#fff" />
          <Text style={{fontSize:SIZES.small,color:'#fff',fontFamily:'Poppins-Bold',marginLeft:5}}>The number is at limit</Text>
        </View> : null}
        {/**Modal Input */}
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginVertical:20,paddingLeft:5}}>
          <Text style={{fontSize:SIZES.medium,color:COLORS.white,fontFamily:'Poppins-Bold',paddingHorizontal:10,paddingVertical:5,backgroundColor:COLORS.primary,borderRadius:20}}>KES</Text>
          <View style={{display:'flex',flexDirection:'row',alignItems:'center',flex:1}}>
            <Text style={{fontSize:SIZES.xxxLarge,color:COLORS.primary,fontFamily:'Poppins-Bold',flex:1,paddingHorizontal:15}}>{Value}</Text>
            <TouchableOpacity onPress={()=> HandleClear()} style={{paddingRight:5}}>
              <Feather name="delete" size={24} color="black"/>
            </TouchableOpacity>
          </View>
        </View>
        <Row>
          <Button text="7" onPress={()=> HandleInput('7')} />
          <Button text="8" onPress={()=> HandleInput('8')} />
          <Button text="9" onPress={()=> HandleInput('9')} />
        </Row>
        <Row>
          <Button text="4" onPress={()=> HandleInput('4')} />
          <Button text="5" onPress={()=> HandleInput('5')} />
          <Button text="6" onPress={()=> HandleInput('6')} />
        </Row>
        <Row>
          <Button text="1" onPress={()=> HandleInput('1')} />
          <Button text="2" onPress={()=> HandleInput('2')} />
          <Button text="3" onPress={()=> HandleInput('3')} />
        </Row>
        <Row>
          <Button text="0" onPress={()=> HandleInput('0')} />
          <View style={{display:'flex',justifyContent:'center',alignContent:'center',flex:1,backgroundColor: "#333333"}}>
            <AntDesign name="enter" size={24} color="#fff" />
          </View>
        </Row>
      </View>
    </View>
  );
}