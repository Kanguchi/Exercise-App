import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import CreateScreen from '../screens/CreateScreen';


export const AppTabNavigator = createBottomTabNavigator({
  GiveRoutine : {
    //UPDATE THE IMAGES
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/browse.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Browse Requests",
    }
  },
  RequestRoutine: {
    screen: CreateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Request Routine",
    }
  }
});
