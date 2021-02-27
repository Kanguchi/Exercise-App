import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import RoutineScreen from '../screens/RoutineScreen';
import RoutineetailsScreen  from '../screens/RoutineDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  RoutineList : {
    screen : RoutineScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RoutineDetails : {
    screen : RoutineetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'RoutineList'
  }
);
