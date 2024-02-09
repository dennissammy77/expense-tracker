import {View,Text} from 'react-native';
import Animated from 'react-native-reanimated';
import { Image } from 'expo-image';
import { COLORS, SIZES } from '../../constants';


export default function Card({id}){
    const getColor = () => {
        switch (id) {
            case 0:
            return '#292c31';
            case 1:
            return '#836ee7';
            case 2:
            return '#Cac3ee';
        }
    };
    return(
        <Animated.View>
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
        </Animated.View>
    )
}