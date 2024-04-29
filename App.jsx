import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginScreen from './src/screens/login_screen/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SubscribeScreen from './src/screens/home_screen_subscribe/SubscribeScreen';
import ContactScreen from './src/screens/home_screen_contact/ContactScreen';
import User from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawer from './src/custom_components/custom_drawer/CustomDrawer';
import SplashScreen from 'react-native-splash-screen';
import { LocalStorageHelper } from './src/helpers/localStoreHelper';
const App = () => {
  const [isValid,SetIsValid]=useState(null)
  useEffect(() => {
    SplashScreen.hide();
    const fetchData = async () => {
      const data = await LocalStorageHelper.getLocalStoreData();
      SetIsValid(data);
    };
    fetchData();
  }, []);
  const Stack = createNativeStackNavigator();
  console.log(isValid,'ooo')
  return (
    <SafeAreaView style={{flex:1}}>
       <NavigationContainer >
      <Stack.Navigator initialRouteName={isValid?'main_home':'login'} screenOptions={{headerShown:false,animationEnabled:false}}>
        <Stack.Screen name="main_home" component={Drawer} />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  )
}


const Drawer=()=>{
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:false,animationEnabled:false}}  drawerContent={(props) => <CustomDrawer {...props} />}>
    <Drawer.Screen name="Home" component={HomeTabs} />
    <Drawer.Screen name="Notifications" component={LoginScreen} />
  </Drawer.Navigator>
  )
}

const HomeTabs=()=>{
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarHideOnKeyboard:true,animationEnable:false}}>
    <Tab.Screen name="subscribe" component={SubscribeScreen} options={{
          tabBarLabel: 'Subscribe',
          tabBarIcon: ({ color }) => (
            <User name="mail" color={color} size={26} />
          ),
        }} />
    <Tab.Screen name="contact_us" component={ContactScreen} options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={26} />
          ),
        }} />
  </Tab.Navigator>
  )
}
export default App