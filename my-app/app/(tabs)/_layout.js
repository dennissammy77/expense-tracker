import { Stack } from 'expo-router/stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { Tabs, router } from 'expo-router';
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn';
import { COLORS } from '../../constants';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  return(
    <Tabs
        initialRouteName='home'
        screenOptions={{
            headerShown:false,
        }}
    >
        <Tabs.Screen 
          name="index"
          
          options={{
            href:"/",
            tabBarIcon:({})=>(
              <Octicons name="home" size={24} color="black" />
            ),
            tabBarShowLabel:false
          }}
        />
        <Tabs.Screen 
          name="newexpense"
          options={{
            href:"/",
            tabBarIcon:({})=>(
              <View style={{padding:4,backgroundColor:COLORS.primary,borderRadius:40,width:50,height:50}}>
                <FontAwesome6 name="add" size={24} color="white" />
              </View>
            ),
            tabBarShowLabel:false
          }}
        />
        <Tabs.Screen 
          name="home"
          options={{
            href:"/",
            tabBarIcon:({})=>(
              <MaterialCommunityIcons name="account" size={24} color="black" />
            ),
            tabBarShowLabel:false
          }}
        />
    </Tabs>
  );
}

{/* <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerStyle: { backgroundColor: COLORS.white},
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn dimension='100%' />
          ),
          headerTitle: "",
        }}
        style={{marginVertical:10}}
      />
      <Stack.Screen
        name="home"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen 
       name="newexpense"
       options={{
        presentation: 'transparentModal',
        headerShown: false,
       }}
      />
    </Stack> */}