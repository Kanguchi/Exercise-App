import * as React from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class MyHeader extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userId: firebase.auth().currentUser.email,
            value: '',
        }
    }
    BellIconWithBadge=()=>{
        return(
            <View>
                <Icon name='bell' type='font-awesome' color='#696969' size={25}
                    onPress={()=>this.props.navigation.navigate('Notification')}/>
                <Badge
                    value={this.state.value}
                    containerStyle={{position: 'absolute', top: -4, right: -4}}/>
            </View>
        )
    }
    render(){
        return(
            <Header
                backgroundColor='#68D3E7'
                leftComponent={<Icon name='bars' type='font-awesome' color='#696969' onPress={()=>this.props.navigation.toggleDrawer()}/>}
                centerComponent={{text: this.props.title, style:{color: '#fff', fontSize: 20, fontWeight: 'bold',}}}
                rightComponent={<this.BellIconWithBadge {...this.props}/>}
            />
        )
    }
}