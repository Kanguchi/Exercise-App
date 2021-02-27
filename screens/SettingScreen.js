import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class SettingScreen extends React.Component{
    render(){
        return(
            <View>
                <MyHeader title='Settings' navigation={this.props.navigation}/>
            </View>
        )
    }
}