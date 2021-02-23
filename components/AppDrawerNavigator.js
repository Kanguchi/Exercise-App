import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import MyRoutineScreen from '../screens/MyRoutineScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen : AppTabNavigator
    },
    MyDonations: {
        screen : MyRoutineScreen
    },
    Notification:{
        screen : NotificationScreen
    },
    Setting:{
        screen: SettingScreen
    } 
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName: 'Home'
})