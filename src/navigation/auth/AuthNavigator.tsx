import React from 'react';
import LoginScreen from '../../screens/auth/LoginScreen';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignUpScreen from "../../screens/auth/SignUpScreen";

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
                name="SignUp"
                component={SignUpScreen}
            />
        </AuthStack.Navigator> // 2. 닫는 태그 추가
    )
}

