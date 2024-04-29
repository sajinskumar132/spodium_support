import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ActivityIndicator, Keyboard, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Images } from '../../helpers/ImageHelper'
import { userLogin } from '../../api/apis'
import { LocalStorageHelper } from '../../helpers/localStoreHelper'

const LoginScreen = () => {
  useEffect(()=>{
    LocalStorageHelper.ClearLocalStoreData()
    console.log('executed')
  },[])
  const navigation=useNavigation()
  const [userCredential,SetUserCredential]=useState({
    email:'',
    password:''
  })
  const [userCredentialValidation,setUserCredentialValidation]=useState({
    email:null,
    password:null
  })
  const [errorText,setErrorText]=useState(null)
  const [loading,setLoading]=useState(false)
  function resetApiError(){
    if(errorText){
      setErrorText(null)
    }
  }
  function onValueChange(name,value){
      SetUserCredential({...userCredential,[name]:value})
      if(userCredentialValidation[name]){
        setUserCredentialValidation({...userCredentialValidation,[name]:null})
      }
      resetApiError()
  }

  const handleLogin = async () => {
    resetApiError()
    let Validation={
      email:userCredentialValidation.email,
      password:userCredentialValidation.password
    }
    if(!userCredential.email.trim()){
      Validation.email='Email id is required'
    }

    if(!userCredential.password.trim()){
      Validation.password='password is required'
    }
    if(Validation.email || Validation.password){
      setUserCredentialValidation(Validation)
    }else{
      setLoading(true);
    try {
        const token = await userLogin(userCredential);
        LocalStorageHelper.SetLocalStoreData(token)
        SetUserCredential({email:'',password:''})
        navigation.navigate('main_home');
    } catch (error) {
      console.log('executed')
      setErrorText(error)
    } finally {
        setLoading(false);
    }
    }
    
};


  return (
    
 <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
  <ScrollView  showsVerticalScrollIndicator={false}  contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
      <View  >
        <View style={style.imageView}>
          <Image source={Images.spodium_logo} style={style.logoImage}/>
        </View>
          <View style={style.subcontainer}>
          <Text style={style.mainText}>Login</Text>
            {errorText && (
                <View style={style.apiErrorView}>
                <Text style={style.apiErrorText}>{errorText}</Text>
             </View>
            )}
            
            <Text style={style.fieldLabel}>Email Id</Text>
            <TextInput placeholder="Enter email id" style={style.fieldInput} placeholderTextColor={'grey'} onChangeText={(value)=>{
              onValueChange("email",value)
            }}/>
            {userCredentialValidation.email ?<Text style={style.errorLabel}>{userCredentialValidation.email}</Text>:<></>}
            <Text  style={style.fieldLabel} >Password</Text>
            <TextInput placeholder="Enter password"  secureTextEntry={true} style={style.fieldInput}  placeholderTextColor={'grey'} onChangeText={(value)=>{
              onValueChange("password",value)
            }}/>
            {userCredentialValidation.password ?<Text style={style.errorLabel}>{userCredentialValidation.password}</Text>:<></>}
            <TouchableOpacity onPress={()=>{
              Keyboard.dismiss()
             handleLogin();
              }} activeOpacity={1}>
            <View style={style.loginMainContainer} pointerEvents={loading ? 'none' : 'auto'}>
              <Text style={style.loginButtonText}> {loading?<ActivityIndicator color={'white'} size={25}/> :'Login'}</Text>
            </View>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
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
      marginVertical:0,
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
   errorLabel:{
    color:'red',
    marginVertical:5,
    textAlign:'left',
    fontSize:15
   },
   apiErrorView:{
      backgroundColor:'#ffd9d9',
      paddingVertical:10,
      borderRadius:10
   },
   apiErrorText:{
    color:'#ca141a',
    textAlign:'center',
    fontSize:15,
    fontWeight:'500'
    },
   fieldInput:{
    color:'black',
    borderWidth:1,
    borderColor:'grey',
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:10,
    width:325,
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