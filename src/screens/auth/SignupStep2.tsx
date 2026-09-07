import {Text, TextInput, View} from "react-native";
import {ERROR_MESSAGES, MAX_NAME_LENGTH, NAME_PLACEHOLDER_TEXT, NAME_REGEXP} from "../../utils/constants/auth.ts";
import {useSignUpStore} from "../../store/auth/useSignUpStore.ts";
import {useState} from "react";

export default function SignupStep2 ()
{
    const [touched,setIsTouched] = useState({
        name : false,
        email : false,
        nickname : false,
    })
    const handleBlur = (field: keyof typeof touched)=> {
        setIsTouched((prevState)=>({
            ...prevState,
            [field]: true
        }))

    }
    const name     = useSignUpStore((state)=>state.name);
    const setName  = useSignUpStore((state)=>state.setName);
    // const email    = useSignUpStore((state)=>state.email);
    // const setEmail = useSignUpStore((state)=>state.setEmail);
    // const nickname = useSignUpStore((state)=>state.nickname);

    const isNameValid = NAME_REGEXP.test(name) && name.length <= MAX_NAME_LENGTH;


    return(
        <View className="flex-1 justify-center p-4">
            <Text className="text-xl font-bold mb-4">회원가입</Text>
                <View className='flex-row items-center gap-1'>
                <Text>이름</Text>
                    {touched.name&&!isNameValid &&(
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
        </View>
    )
}

