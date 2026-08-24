import React from 'react';
import LoginScreen from '../../screens/auth/LoginScreen';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignUpScreen from "../../screens/auth/SignUpScreen";

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator()
{
    return(
        <AuthStack.Navigator initialRouteName="Login">
            {/* 로그인 화면 등록 */}
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />

            {/* 2. 회원가입 화면 추가 */}
            <AuthStack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ title: "회원가입" }}
            />
        </AuthStack.Navigator> // 2. 닫는 태그 추가
    )
}

