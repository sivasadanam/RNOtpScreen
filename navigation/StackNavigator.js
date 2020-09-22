import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import SplashScreen from "../screens/SplashScreen";
import SignInScreen from "../screens/SignInScreen";
import OtpVerification from "../screens/OtpVerification";

import DrawerNavigator from '../navigation/DrawerNavigator'
import BottomTabNavigator from '../navigation/TabNavigator'


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    // header:null   ,     // this will do your task
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const screenOptionStyle2 = {
  headerStyle: {
      // this will do your task
    backgroundColor: "#f95f0d",
  },
  headerTintColor: "#f95f0d",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Screen 1" component={Screen1} />
      <Stack.Screen name="Screen 2" component={Screen2} />
      <Stack.Screen name="Screen 3" component={Screen3} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Screen 3" component={Screen3} />
     
    </Stack.Navigator>
  );
};


const TabHomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Screen 1" component={Screen1} />
      <Stack.Screen name="Screen 2" component={Screen2} />
      <Stack.Screen name="Screen 3" component={Screen3} />
    </Stack.Navigator>
  );
};


const SplashScreenStack = () => {
  
  return (
    
    <Stack.Navigator screenOptions={screenOptionStyle2}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      </Stack.Navigator>
  );
};



export { MainStackNavigator, ContactStackNavigator , TabHomeStackNavigator, SplashScreenStack};
