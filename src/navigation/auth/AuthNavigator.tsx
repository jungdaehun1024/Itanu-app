import React from 'react';
import LoginScreen from '../../screens/auth/LoginScreen';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import SignupStep1 from "../../screens/auth/SignupStep1";
import SignupStep2 from "../../screens/auth/SignupStep2";

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator()
{
    return(
        <AuthStack.Navigator
            screenOptions={{headerShown: false,}}
            initialRouteName="Login"
        >
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name="SignupStep1"
                component={SignupStep1}
            />
            <AuthStack.Screen
                name="SignupStep2"
                component={SignupStep2}
            />
        </AuthStack.Navigator>
    )
}

