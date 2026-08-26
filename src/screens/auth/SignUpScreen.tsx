import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import {extractNumbers} from "../../utils/format.ts";

export default function SignUpScreen() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone]   = useState({
        first : '',
        middle : '',
        last : ''
    });

    //휴대폰 번호 입력 각 자리에 숫자가 아니라 다른 값이 들어오면 안되도록
    const handlePhoneNumberChange = (field:string,number:string) => {
        const phoneNumber = extractNumbers(number);
        console.log(phoneNumber);
        if(field === "first") setPhone({...phone , first:phoneNumber});
        if(field === "middle") setPhone({...phone , middle:phoneNumber});
        if(field === "last") setPhone({...phone , last:phoneNumber});

    };



    return (
        <View className="flex-1 justify-center p-4">
            <Text className="text-xl font-bold mb-4">회원가입</Text>
            <Text>아이디</Text>
            <TextInput
                value={id}
                onChangeText={setId}
                className="bg-amber-100 p-2 mb-3"
            />

            <Text>비밀번호</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                className="bg-amber-100 p-2 mb-3"
            />
            <Text>휴대폰</Text>
            <View className='flex-row gap-1'>
            <TextInput
                    value={phone.first}
                    onChangeText={(text)=> {
                        handlePhoneNumberChange('first',text)
                    }}
                    className="bg-amber-100 p-2 mb-3 flex-1 border-2"
                    keyboardType={"numeric"}
                    maxLength={3}
            />
            <TextInput
                value={phone.middle}
                onChangeText={(text)=> {
                    handlePhoneNumberChange('middle',text)
                }}
                className="bg-amber-100 p-2 mb-3 flex-1 border-2"
                keyboardType={"numeric"}
                maxLength={4}
            />
            <TextInput
                value={phone.last}
                onChangeText={(text)=> {
                    handlePhoneNumberChange('last',text)
                }}
                className="bg-amber-100 p-2 mb-3 flex-1 border-2 "
                keyboardType={"numeric"}
                maxLength={4}
            />
            </View>
            <Button title="가입 완료" onPress={() => console.log(phone)} />
        </View>
    );
}