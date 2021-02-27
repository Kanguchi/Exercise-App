import * as React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Flatlist, TouchableHighlight, Alert,} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';

export default class CreateScreen extends React.Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <MyHeader title='Create Request'/>
            </View>
        )
    }
}