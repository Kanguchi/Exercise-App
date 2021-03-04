import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class RoutineScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId: firebase.auth().currentUser.email,
            requestList: [],
        }
        this.requestRef = null;
    }
    getRequests=()=>{
        this.requestRef = db.collection('requested_routines')
            .onSnapshot((snapshot)=>{
                var requestList = snapshot.docs.map((doc)=>doc.data())
                this.setState({
                    requestList: requestList
                })
            })
    }

    componentDidMount(){
        this.getRequests();
    }

    componentWillUnmount(){
        this.requestRef();
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#f7f3de'}}>
                <MyHeader title='Browse Requests'/>
            </View>
        )
    }
}