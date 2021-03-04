import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import db from '../config';

export default class WelcomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      contact: '',
      confirmPassword: '',
      isModalVisible: false,
    }
  }
  signUp=(username, password, confirmPassword)=>{
    if(password !== confirmPassword){
      return Alert.alert("Your passwords don't match!\nCheck your password.");
    } else {
      firebase.auth().createUserWithEmailAndPassword(username, password)
        .then(()=>{
          db.collection('users').add({
            first_name : this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            username: this.state.username,
          })
        })
        return Alert.alert("User Added Successfully!", "", [{
          text: 'OK',
          onPress: ()=> this.setState({isModalVisible: false})
        }])
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  }
  login=(username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(()=>{
        this.props.navigation.navigate('RoutineList');
      }) .catch(error =>{
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      })
  }

  showModal=()=>{
    return(
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
        >
        <View style={styles.modalContainer}>
          <KeyboardAvoidingView style={{flex:1, backgroundColor: '#fff'}}>
            <Text style={styles.signUpText}>Registration</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder={'Email'}
              keyboardType='email-address'
              onChangeText={text=>{
                this.setState({
                  username: text
                })
              }}
              />
            <TextInput
              style={styles.formTextInput}
              placeholder={'First Name'}
              maxLength={18}
              onChangeText={text=>{
                this.setState({
                  firstName: text
                })
              }}/>
              <TextInput
                style={styles.formTextInput}
                placeholder={'Last Name'}
                maxLength={18}
                onChangeText={text=>{
                  this.setState({
                    lastName: text
                  })
                }}/>
              <TextInput
                style={styles.formTextInput}
                placeholder={'Password'}
                secureTextEntry={true}
                onChangeText={text=>{
                  this.setState({
                    password: text
                  })
                }}/>
              <TextInput
              style={styles.formTextInput}
              placeholder={'Confirm Password'}
              secureTextEntry={true}
              onChangeText={text=>{
                this.setState({
                  confirmPassword: text
                })
              }}/>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={()=>{
                    this.signUp(
                      this.state.username,
                      this.state.password,
                      this.state.confirmPassword
                    )
                  }}>
                  <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={()=>{
                    this.setState({
                      isModalVisible: false,
                    })
                  }}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    )
  }

  render(){
    return(
      <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>{this.showModal()}</View>
        <View style={styles.profileContainer}>
          <Text style={styles.title}>Fitness for You</Text>
          <Image source={require('../assets/running.gif')} 
          style={styles.imageView}/>
        </View>
        <KeyboardAvoidingView>
          <View style={styles.login}>
            <TextInput
              style={styles.loginBox}
              placeholder='username'
              keyboardType='email-address'
              onChangeText={(text)=>{
                this.setState({
                  username: text
                })
              }}
              />
              <TextInput
                style={styles.loginBox}
                placeholder='enter password'
                secureTextEntry={true}
                onChangeText={(text)=>{
                  this.setState({
                    password: text
                  })
                }}
              />
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity 
              style={styles.button}
              onPress={()=>{
                this.login(this.state.username, this.state.password);
              }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{
                this.setState({
                  isModalVisible: true
                })
              }}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#81e7e5ff',
  },
  profileContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView:{
    width: 250,
    height: 80,
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: RFValue(250),
    marginBottom: RFValue(60),
  },
  title:{
    paddingTop: RFValue(50),
    fontSize:RFValue(50),
    fontWeight:'200',
    //fontFamily:'AvenirNext-Heavy',
    color : '#0E4B4A'
  },
  login:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: RFValue(80),
  },
  loginBox:{
    width: "80%",
    height: RFValue(50),
    borderBottomWidth: 1,
    borderColor: "#fff",
    marginBottom: 15,
    fontSize: RFValue(20),
    paddingLeft: RFValue(10)
  },
  button:{
    width: "65%",
    height: RFValue(50),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(25),
    backgroundColor: "#ffff",
    shadowColor: "#000",
    marginBottom: RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: RFValue(16)
  },
  buttonText:{
    color: '#0E4B4A',
    fontWeight: 'bold',
    fontSize: RFValue(20)
  },
  formTextInput:{
    width: 200,
    height: 37,
    alignSelf: 'center',
    borderColor: '#30a09e',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  modalContainer:{
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ffff",
    marginRight:RFValue(30),
    marginLeft : RFValue(30),
    marginTop:RFValue(80),
    marginBottom:RFValue(80),
  },
  signUpText:{
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#0E4B4A',
    padding: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  registerButton: {
    width: 200,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50
  },
  cancelButton:{
    width: 200,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5
  },
})
