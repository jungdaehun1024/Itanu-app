import {ID_REGEXP, PASSWORD_REGEXP, PHONE_REGEXP} from "./constants/auth";

//아이디 입력 유효성검사
export const isValidId = (id:string):boolean =>{
    if (typeof id !== 'string' || !id.trim()) return false;
    return ID_REGEXP.test(id);
}

//패스워드 입력 유효성검사
export  const isValidPassword = (password:string):boolean => {
    if (typeof password !== 'string' || !password.trim()) return false;
    return PASSWORD_REGEXP.test(password);
}

//휴대폰번호 입력 유효성검사
export const isValidPhone = (phone:string):boolean =>{
    if (typeof phone !== 'string' || !phone.trim()) return false;
    return PHONE_REGEXP.test(phone);

}