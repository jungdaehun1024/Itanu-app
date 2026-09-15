import {Button, Text, TextInput, View} from "react-native";
import {
    EMAIL_PLACEHOLDER_TEXT, EMAIL_REGEXP,
    ERROR_MESSAGES, MAX_EMAIL_LENGTH,
    MAX_NAME_LENGTH, MIN_EMAIL_LENGTH,
    NAME_PLACEHOLDER_TEXT,
    NAME_REGEXP
} from "../../utils/constants/auth.ts";
import {useSignUpStore} from "../../store/auth/useSignUpStore.ts";
import {useState} from "react";

export default function SignupStep2 ()
{
    const [touched,setIsTouched] = useState({
        name : false,
        email : false,
    })
    const handleBlur = (field: keyof typeof touched)=> {
        setIsTouched((prevState)=>({
            ...prevState,
            [field]: true
        }))

    }
    const name     = useSignUpStore((state)=>state.name);
    const setName  = useSignUpStore((state)=>state.setName);
    const email    = useSignUpStore((state)=>state.email);
    const setEmail = useSignUpStore((state)=>state.setEmail);
    // const nickname = useSignUpStore((state)=>state.nickname);

    const isNameVaild = NAME_REGEXP.test(name) && name.length <= MAX_NAME_LENGTH;
    const isEmailValid = email.length <= MAX_EMAIL_LENGTH && email.length > MIN_EMAIL_LENGTH && EMAIL_REGEXP.test(email);

    const isFormValid =  isNameVaild && isEmailValid;


    return(
        <View className="flex-1 justify-center p-4">
            <Text className="text-xl font-bold mb-4">회원가입</Text>
                <View className='flex-row items-center gap-1'>
                <Text>이름</Text>
                    {touched.name&&!isNameVaild &&(
                        <Text className="text-red-500 text-xs">{ERROR_MESSAGES.INVALID_NAME}</Text>
                    )}
                </View>
            <TextInput
                 className="bg-amber-100 p-2 mb-3"
                 value={name}
                 placeholder={NAME_PLACEHOLDER_TEXT}
                 maxLength={MAX_NAME_LENGTH}
                 onChangeText={setName}
                 onBlur={()=> {
                     handleBlur('name');
                 }}
            />
            <View className='flex-row items-center gap-1'>
                <Text>이메일</Text>
                {
                  touched.email&& !isEmailValid && (
                  <Text className="text-red-500 text-xs">{ERROR_MESSAGES.INVALID_EMAIL}</Text>
                )}
            </View>
            <TextInput
            className="bg-amber-100 p-2 mb-3"
            value={email}
            placeholder={EMAIL_PLACEHOLDER_TEXT}
            maxLength={MAX_EMAIL_LENGTH}
            onChangeText={setEmail}
            onBlur={()=> {
                handleBlur('email');
            }}/>
            <Button title="가입완료" disabled={!isFormValid} onPress={()=>console.log(useSignUpStore.getState())}/>
        </View>
    )
}

