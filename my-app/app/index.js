import { useState } from 'react';
import { SafeAreaView, ScrollView, View,Text } from 'react-native';
import { Stack, useRouter } from "expo-router";
import { COLORS, images, SIZES } from "../constants";
import ScreenHeaderBtn from '../components/ScreenHeaderBtn';
import Overview from '../components/Home/Overview';
import Transactions from '../components/Home/Transactions';
import Salutations from '../components/Home/Salutations';

export default function App() {
  const router = useRouter()
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.tertiary}}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.tertiary},
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn dimension='100%' />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          flex:1,
          padding: SIZES.medium
        }}>
          <Salutations />
          <Overview />
          <Transactions />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}