import * as React from 'react';
import { StyleSheet, View, FlatList,Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
//import SwipeableFlatlist from '../components/SwipeableFlatlist';
import db from '../config';

export default class NotificationScreen extends React.Component{
    render(){
        return(
            <MyHeader title='Notifications'/>
        )
    }
}
