import { View, Text } from 'react-native';
import React from 'react';

export default function Overview() {
  return (
    <View style={{display:'flex',flex:1,alignItems:'center',marginVertical:25}}>
      <View style={{borderRadius:30,padding:30,height:200,width:'100%',zIndex:0,backgroundColor:'#292c31'}}>
        <Text>Overview</Text> 
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