import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class RoutineScreen extends React.Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <MyHeader title='Browse Requests'/>
            </View>
        )
    }
}