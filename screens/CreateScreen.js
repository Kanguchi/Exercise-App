import * as React from 'react';
import {
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    Flatlist, 
    TouchableHighlight, 
    Alert,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CreateScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId: firebase.auth().currentUser.email,
            requestTitle: '',
            goal: '',
            spaceAvailable: '',
            toolsAvailable: '',
            timeFrame: '',
            requestStatus: '',
            requestId: '',

        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7);
    }

    addRequest = async (title,goal, space, tools, time)=>{
        var userID = this.state.userId
        var randomRequestId = this.createUniqueId();
        db.collection('routine_requests').add({
            "user_id": userID,
            "request_title":title,
            "exercise_goal":goal,
            "space_available": space,
            "exercise_tools": tools,
            "routine_length": time,
            "request_id"  : randomRequestId,
            "date"       : firebase.firestore.FieldValue.serverTimestamp(),
        })
    
        this.setState({
            bookName :'',
            reasonToRequest : '',
            requestId: randomRequestId
        })
    
        return Alert.alert("Routine Requested Successfully")
    
      }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <MyHeader title='Create Request'/>
                <KeyboardAvoidingView>
                    <ScrollView >
                        <TextInput
                            style={styles.formTextInput}
                            placeholder={'Request Title'}
                            onChangeText={text=>{
                                this.setState({requestTitle: text})
                            }}
                            value={this.state.requestTitle}/>
                        <TextInput
                            style={[styles.formTextInput, {height: RFValue(80)}]}
                            placeholder={'What do you want to achieve with this routine?'}
                            multiline
                            numberOfLines={2}
                            onChangeText={text=>{
                                this.setState({goal: text})
                            }}
                            value={this.state.goal}/>
                        <TextInput
                            style={styles.formTextInput}
                            placeholder={'Space you have to exercise'}
                            multiline
                            numberOfLines={8}
                            onChangeText={text=>{
                                this.setState({spaceAvailable: text})
                            }}
                            value={this.state.spaceAvailable}/>
                        <TextInput
                            style={styles.formTextInput}
                            placeholder={'Exercise tools available to you'}
                            multiline
                            numberOfLines={8}
                            onChangeText={text=>{
                                this.setState({toolsAvailable: text})
                            }}
                            value={this.state.toolsAvailable}/>
                        <TextInput
                            style={styles.formTextInput}
                            placeholder={'How long you want the routine to be'}
                            multiline
                            numberOfLines={8}
                            onChangeText={text=>{
                                this.setState({timeFrame: text})
                            }}
                            value={this.state.timeFrame}/>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={()=>{
                                this.addRequest(this.state.requestTitle, this.state.goal, this.state.spaceAvailable, this.state.toolsAvailable, this.state.timeFrame);
                            }}
                            >
                            <Text style={{color: '#fff'}}>Request</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formTextInput: {
        width: RFValue(250),
        height: RFValue(40),
        alignSelf: 'center',
        borderColor: '#135560',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: RFValue(20),
        padding: RFValue(10),
    },
    submitButton:{
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: RFValue(150),
        height: RFValue(50),
        backgroundColor: '#FB6902',
        marginVertical: RFValue(20),
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
         },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    ScrollView:{
        alignItems: 'center',
    }
})