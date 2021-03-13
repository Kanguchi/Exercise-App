import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';

export default class SettingScreen extends React.Component{
    constructor(){
        super();
        this.state={
            username: '',
            firstName: '',
            lastName: '',
            docId: '',
        }
    }
    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users')
    }
    render(){
        return(
            <View>
                <MyHeader title='Settings' navigation={this.props.navigation}/>
            </View>
        )
    }
}