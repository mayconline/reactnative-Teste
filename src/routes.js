import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Feed from './pages/Feed';
import New from './pages/New';

export default createAppContainer(
    createStackNavigator({
        Feed,
        New
    },{
        defaultNavigationOptions:{
            headerTitle:'teste',
            headerTintColor:'#000',
            headerBackTitle:null ,
           headerStyle: {
                backgroundColor: '#f4511e',
              }        
        },
        mode:'modal'
    })
)