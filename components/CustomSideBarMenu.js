import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import * as ImagePicker from  'expo-image-picker';
import firebase from 'firebase';
import db from '../config';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

export default class CustomSideBarMenu extends Component {
    state={
        userId: firebase.auth().currentUser.email,
        image: '#',
        name: '',
        docId: '',
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 0.1}}>
                    <DrawerItems {...this.props}/>
                </View>
            </View>
        )
    }
}