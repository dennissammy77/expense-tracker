import { useState } from 'react';
import { SafeAreaView, ScrollView, View,Text,Pressable, } from 'react-native';
import { Stack, useRouter,Link } from "expo-router";
import { COLORS, images, SIZES } from "../constants";
import ScreenHeaderBtn from '../components/ScreenHeaderBtn';
import Overview from '../components/Home/Overview';
import Transactions from '../components/Home/Transactions';
import Salutations from '../components/Home/Salutations';

export default function Home() {
  const router = useRouter()
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.tertiary}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          flex:1,
          padding: SIZES.medium
        }}>
          <Salutations />
          <Transactions />
        </View>
        <Link href="/home" asChild style={{padding:10,backgroundColor:'#000',marginVertical:5}}>
          <Pressable>
            <Text>Home</Text>
          </Pressable>
        </Link>
        
        <Link href="/newexpense" asChild style={{padding:10,backgroundColor:'#000'}}>
          <Pressable>
            <Text>newexpense</Text>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}