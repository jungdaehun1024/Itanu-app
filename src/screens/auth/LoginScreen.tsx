import {Button, Text, TextInput, View} from "react-native";
import {useState} from "react";

const CONTAINER_STYLE = "flex-1 justify-center";
export default function LoginScreen({navigation} : any)
{
    const [id,setId] = useState("");
    const [password,setPassword] = useState("");

    // 2. 이동 버튼 클릭 이벤트 핸들러
    const handleRegister = () => {
        // AuthNavigator나 AppNavigator에 등록해 둔 회원가입 화면의 name을 입력합니다.
        navigation.navigate("SignupStep1"); // 예: 'Register' 또는 'SignUp'
    };
    return(
        <View className = {CONTAINER_STYLE}>
            <Text>
                 로그인
            </Text>

            <Text>아이디</Text>
            <TextInput  value={id} onChangeText={setId} className="bg-amber-100"/>

            <Text>패스워드</Text>
            <TextInput  value={password} onChangeText={setPassword} className="bg-amber-100"/>

            <Button title="회원가입" onPress={handleRegister} />
        </View>

    );
}