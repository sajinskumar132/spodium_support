import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../custom_components/header/CustomHeader';
import AntdDesign from 'react-native-vector-icons/AntDesign';

const SubscribeScreen = () => {
  const array = new Array(20).fill(null);
  return (
    
    <View style={style.main_container}>
    <CustomHeader />
    <View style={style.main_search_container}>
      <TextInput placeholder="Search email"  placeholderTextColor={"grey"}  style={style.input_field} />
      <AntdDesign name="search1" size={20} color={'grey'} />
    </View>
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
         {array.map((item,index)=>(
            <View style={style.main_subscription_container} key={index}>
            <Text style={style.subscription_email}>SajinSkumar132@gmail.com {index}</Text>
            <Text style={style.subscription_dateTime}>12-05-2024 10:50 AM</Text>
         </View>
       
         ))}
      </ScrollView>
      
    </View>
  </View>
  )
}

export default SubscribeScreen

const style = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main_search_container: {
    marginVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth:1,
    borderColor:'grey',
    marginHorizontal:20,
    paddingHorizontal:15,
    borderRadius:20
  },
  input_field:{
    paddingVertical:5,
    color:'black'
  },
  main_subscription_container: {
    borderWidth:1,
    borderColor:'#DCDCDC',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:5,
    marginHorizontal:5,
    marginVertical:5
  },
  subscription_email: {
    fontSize:16,
    fontWeight:'900',
    marginBottom:10,
    color:'black'
  },
  subscription_dateTime: {
    fontSize:14,
    fontWeight:'500',
    marginBottom:10,
    color:'grey'
  },
});
