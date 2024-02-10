import {view,Text, TouchableOpacity} from 'react-native';
import { Image } from 'expo-image';

export default function ScreenHeaderBtn(){
    return(
        <TouchableOpacity>
          <Image source={require('../assets/images/home_bg.jpg')} style={{width:45,height:45,borderRadius:30}}/>  
        </TouchableOpacity>
    )
}