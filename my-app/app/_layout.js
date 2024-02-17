import { Stack } from 'expo-router/stack';
import { COLORS } from '../constants';
import ScreenHeaderBtn from '../components/ScreenHeaderBtn';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Layout() {
  return(
    <Stack>
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
    </Stack>
  );
}