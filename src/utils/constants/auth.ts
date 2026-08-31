//ID 최소길이 ,최대길이
export const MAX_ID_LENGTH = 15;
export const MIN_ID_LENGTH = 6;
export const ID_PLACEHOLDER_TEXT = "아이디: 6자리 이상 15자리 이하 영문/숫자 조합";
export const ID_REGEXP  = /^(?=.*[a-zA-z])(?=.*\d)[a-zA-Z\d]{6,15}$/

//패스워드 최대 최소길이
export  const MAX_PASSWORD_LENGTH = 20;
export  const MIN_PASSWORD_LENGTH = 15;
export  const PASSWORD_PLACEHOLDER_TEXT ="패스워드: 15자리 이상 20자리 이하  영문/숫자 조합";
export const  PASSWORD_REGEXP = /^(?=.*[a-zA-z])(?=.*\d)[a-zA-Z\d]{6,20}$/; //패스워드 정규표현식 (영문+숫자조합)

//휴대폰번호 길이지정
export const DEFAULT_PHONE_LENGTH = 11;
export const PHONE_PLACEHOLDER_TEXT = "휴대폰번호: 11자리 숫자('-'제외)";
export const PHONE_REGEXP = /^01[01]\d{8}$/; //010,011 뒤 8자리 검증