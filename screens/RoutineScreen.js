import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
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
        this.requestRef = db.collection('routine_requests')
            .onSnapshot((snapshot)=>{
                var requestList = snapshot.docs.map((doc)=>doc.data())
                this.setState({
                    requestList: requestList
                })
                console.log(requestList);
            })
    }

    componentDidMount(){
        this.getRequests();
    }

    componentWillUnmount(){
        this.requestRef();
    }

    keyExtractor=(item, index)=>index.toString()

    renderItem=({item, i})=>{
        return(
            <ListItem
                key={i}
                title={item.request_title}
                subtitle={item.exercise_goal}
                titleStyle={{color: 'black', fontWeight: 'bold'}}
                rightElement={
                    <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        this.navigation.navigate('RoutineDetails', {"details": item})
                    }}>
                        <Text style={{color: '#fff'}}>View</Text>
                    </TouchableOpacity>
                }
                bottomDivider
            />
        )
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#f7f3de'}}>
                <MyHeader title='Browse Requests' navigation={this.props.navigation}/>
                <View style={{flex:1}}>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.requestList}
                renderItem={this.renderItem}
              />
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    button:{
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: RFValue(50),
        height: RFValue(20),
        backgroundColor: '#FB6902',
        marginVertical: RFValue(20),
        borderRadius: 10,
    }
})