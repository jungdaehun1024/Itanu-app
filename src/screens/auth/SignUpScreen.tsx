import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function SignUpScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View className="flex-1 justify-center p-4">
            <Text className="text-xl font-bold mb-4">회원가입</Text>

            <Text>이메일</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="이메일을 입력하세요"
                className="bg-amber-100 p-2 mb-3"
            />

            <Text>비밀번호</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="비밀번호를 입력하세요"
                className="bg-amber-100 p-2 mb-3"
            />

            <Button title="가입 완료" onPress={() => console.log("가입 요청")} />
        </View>
    );
}