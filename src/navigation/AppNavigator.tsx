import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 방금 작성한 AuthNavigator 불러오기 (경로가 src/navigation/auth/AuthNavigator.tsx 기준)
import AuthNavigator from './auth/AuthNavigator';

const RootStack = createNativeStackNavigator();

export default function AppNavigator() {
    const isLoggedIn = false; // 로그인 상태 테스트 (false: 비로그인 -> AuthNavigator 출력)

    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {!isLoggedIn ? (
                // 💡 방금 완성한 AuthNavigator를 화면(Screen) 단위로 등록!
                <RootStack.Screen name="AuthGroup" component={AuthNavigator} />
            ) : (
                null
            )}
        </RootStack.Navigator>
    );
}