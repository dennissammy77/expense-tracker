import { View, Text } from 'react-native'
import React from 'react'

export default function Overview() {
  return (
    <View style={{display:'flex',flex:1}}>
      <View style={{borderRadius:20,backgroundImage:'../../assets/Designs/wallet_card.jpg',height:'200px'}}>
        <Text>Overview</Text> 
      </View>
      <Text>Overview</Text>
    </View>
  )
}