import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import {extractNumbers} from "../../utils/format.ts";
import {
    MAX_ID_LENGTH,
    MIN_ID_LENGTH,
    ID_PLACEHOLDER_TEXT,
    MAX_PASSWORD_LENGTH,
    MIN_PASSWORD_LENGTH,
    PASSWORD_PLACEHOLDER_TEXT,
    DEFAULT_PHONE_LENGTH,
    PHONE_PLACEHOLDER_TEXT,
    ID_REGEXP, PASSWORD_REGEXP, PHONE_REGEXP, ERROR_MESSAGES
} from "../../utils/constants/auth.ts";
import {useSignUpStore} from "../../store/auth/useSignUpStore.ts";
import {useNavigation} from "@react-navigation/native";

export default function SignupStep1() {

    // Zutand  store에서 필요한 상태값, 액션 가져온다.

    //아이디
    const id = useSignUpStore((state) =>state.id );
    const setId = useSignUpStore((state) =>state.setId)
    // 패스워드
    const password = useSignUpStore((state) =>state.password);
    const setPassword = useSignUpStore((state) =>state.setPassword);

    //패스워드 확인
    const [passwordConfirm, setPasswordConfirm] = useState("");

    //휴대폰
    const phone = useSignUpStore((state) =>state.phone);
    const setPhone = useSignUpStore((state) =>state.setPhone);


    const [touched,setIsTouched] = useState({
        id : false,
        password :  false ,
        passwordConfirm : false ,
        phone :  false
    });

    /**
     * @param field touched 상태변수의 키값을 뽑아내어 id,password,phone만을 인자로 받게한다.
     *
     * 입력후 포커스가 풀린 input 에 대해서 true로 변경
     */
    const handleBlur = (field: keyof typeof touched) =>{
       setIsTouched((prevState)=>({
           ...prevState,
           [field]:true,  //입력 field 만 true로
       }));
    }

    //각 필드별 검증 상태 정의
    const isIdValid = ID_REGEXP.test(id) && id.length >= MIN_ID_LENGTH;
    const isPasswordValid = PASSWORD_REGEXP.test(password) && password.length >= MIN_PASSWORD_LENGTH;
    const isPhoneValid = PHONE_REGEXP.test(phone) && phone.length === DEFAULT_PHONE_LENGTH;

    //패스워드 & 패스워드확인 상태변수 값이 같은지 검증
    const isPasswordMatched = (password === passwordConfirm) && password.length >0 ;

    //유효성검사로직
    const isFormValid = isIdValid && isPasswordValid && isPasswordMatched ;

    const navigation = useNavigation();
    return (
        <View className="flex-1 justify-center p-4">
            <Text className="text-xl font-bold mb-4">회원가입</Text>

            <View className='flex-row items-center gap-2'>
                <Text>아이디</Text>
                {!isIdValid && touched.id && (
                    <Text className="text-red-500 text-xs"> {ERROR_MESSAGES.INVALID_ID}</Text>
                )}
            </View>
            <TextInput
                value={id}
                maxLength={MAX_ID_LENGTH}
                placeholder={ID_PLACEHOLDER_TEXT}
                onChangeText={setId}
                onBlur={()=> {
                  handleBlur('id');
                }}
                className="bg-amber-100 p-2 mb-3"
            />

            <View className='flex-row items-center gap-1'>
                <Text>비밀번호</Text>
                {!isPasswordValid && touched.password && (
                    <Text className="text-red-500 text-xs">{ERROR_MESSAGES.INVALID_PASSWORD}</Text>
                )}
            </View>
            <TextInput
                value={password}
                maxLength={MAX_PASSWORD_LENGTH}
                placeholder={PASSWORD_PLACEHOLDER_TEXT}
                onChangeText={setPassword}
                onBlur={()=> {
                    handleBlur('password');
                }}
                secureTextEntry={true}
                className="bg-amber-100 p-2"
            />

            <View className='flex-row items-center gap-1'>
                <Text>비밀번호 확인</Text>
                {
                     //패스워드 확인 인풋에 onblur이벤트 먼저 발생해야만 안내메시지 노출여부 판단
                     touched.passwordConfirm && (
                        isPasswordMatched ?(
                            <Text className="text-green-500 text-xs"> 비밀번호가 일치합니다.</Text>
                        ) : (
                            <Text className="text-red-500 text-xs"> {ERROR_MESSAGES.PASSWORD_UNMATCHED}</Text>
                        ))
                }
            </View>

            <TextInput
                value={passwordConfirm}
                maxLength={MAX_PASSWORD_LENGTH}
                placeholder={PASSWORD_PLACEHOLDER_TEXT}
                onChangeText={setPasswordConfirm}
                onBlur={()=> {
                    handleBlur('passwordConfirm');
                }}
                secureTextEntry={true}
                className="bg-amber-100 p-2 mb-3"
            />
            <View className='flex-row items-center gap-1 '>
                <Text>휴대폰</Text>
                {!isPhoneValid && touched.phone && (
                    <Text className="text-red-500 text-xs"> {ERROR_MESSAGES.INVALID_PHONE}</Text>
                )}
            </View>

            <View className='flex-row gap-1'>
            <TextInput
                    value={phone}
                    maxLength={DEFAULT_PHONE_LENGTH}
                    placeholder={PHONE_PLACEHOLDER_TEXT}
                    onChangeText={setPhone}
                    onBlur={()=> {
                        handleBlur('phone');
                    }}
                    className="bg-amber-100 p-2 mb-3 flex-1 border-2"
                    keyboardType={"numeric"}
            />
            </View>
            <Button title="다음"  disabled={!isFormValid} onPress={() => navigation.navigate("SignupStep2")} />
        </View>
    );
}