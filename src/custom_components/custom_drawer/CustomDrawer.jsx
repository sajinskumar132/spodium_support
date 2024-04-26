import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '../../helpers/ImageHelper';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
    const navigation=useNavigation()
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={style.container} >
      <View style={style.main_container} >
        <View>
        <View style={style.main_Image_container}>
         <Image source={Images.profile_pic} style={style.profile_pic}/>
        </View>
        
        <Text style={style.userName}>Sajin</Text>
        <Text style={style.userEmail}>SajinSkumar132@gamil.com</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('login')}}>
        <View style={style.logoutMainContainer}>
            <Text style={style.logoutButtonText}>Logout</Text>
        </View>
        </TouchableOpacity>
       
      </View>
  </DrawerContentScrollView>
  )
}

export default CustomDrawer

const style=StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
      },
    main_container:{
        flex:1,
        justifyContent:'space-between'
    },
    main_Image_container:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center'
    },
    profile_pic:{
        width:150,
        height:150,
        borderRadius:100
    },
    userName:{
        marginTop:15,
        fontSize:20,
        fontWeight:'900',
        color:'black',
        textAlign:'center'
    },
    userEmail:{
        marginTop:10,
        fontSize:16,
        fontWeight: "700",
        color:'black',
        textAlign:'center'
    },
    logoutMainContainer:{
          color:'white',
          backgroundColor:"#4C99FF",
          padding:12,
       },
       logoutButtonText:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'800',
        color:'white'
       }
})