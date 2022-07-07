import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import About from '../screens/About';

export default function MainNavigation() {

    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name='Home'
                component={Home}
            />

            <AuthStack.Screen
                name='About'
                component={About}
            />
        </AuthStack.Navigator>
        );
    }