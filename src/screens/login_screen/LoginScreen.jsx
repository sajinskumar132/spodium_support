import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Images } from '../../helpers/ImageHelper'

const LoginScreen = () => {
  const navigation=useNavigation()
  return (
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <View>
        <View style={style.imageView}>
          <Image source={Images.spodium_logo} style={style.logoImage}/>
        </View>
          <View style={style.subcontainer}>
          <Text style={style.mainText}>Login</Text>
            <Text style={style.fieldLabel}>Email Id</Text>
            <TextInput placeholder="Enter email id" style={style.fieldInput} placeholderTextColor={'grey'}/>
            <Text  style={style.fieldLabel} >Password</Text>
            <TextInput placeholder="Enter password"  secureTextEntry={true} style={style.fieldInput}  placeholderTextColor={'grey'}/>
            <TouchableOpacity onPress={()=>{navigation.navigate('main_home')}} activeOpacity={1}>
            <View style={style.loginMainContainer}>
              <Text style={style.loginButtonText}>Login</Text>
            </View>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default LoginScreen


const style=StyleSheet.create({
  imageView:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:50
 },
   logoImage:{
      marginVertical:30,
   },
   subcontainer:{
    marginHorizontal:30
   },
   mainText:{
    color:'black',
    textAlign:'left',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20
   },
   fieldLabel:{
    color:'black',
    marginVertical:10,
    textAlign:'left',
    fontSize:16
   },
   fieldInput:{
    color:'black',
    borderWidth:1,
    borderColor:'grey',
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:10,
    width:300,
    fontSize:15
   },
   loginMainContainer:{
    marginTop:50,
      color:'white',
      backgroundColor:"#4C99FF",
      padding:12,
      borderRadius:10
   },
   loginButtonText:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'800',
    color:'white'
   }
})