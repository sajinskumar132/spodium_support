import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntdDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { Images } from '../../helpers/ImageHelper';
const CustomHeader = () => {
    const navigation=useNavigation()
  return (
    <View style={style.main_container}>
        <TouchableOpacity onPress={()=>{ navigation.openDrawer()}}>
           <MaterialCommunityIcons name="menu" size={33} color={'black'}/>
        </TouchableOpacity>
         <Image source={Images.Spodium_logo_without_text} style={style.logo_text}/>
         {/* <Text style={style.logo_text} >Spodium</Text> */}
          <TouchableOpacity onPress={()=>{navigation.navigate('login')}}>
         <AntdDesign name="logout"  size={25}  color={'black'}/>
        </TouchableOpacity>
    </View>
  )
}

export default CustomHeader

const style=StyleSheet.create({
    main_container:{
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:'white',
        elevation:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    logo_text:{
      width :27,
      height:27
    }
})