/**
 *  입력된 문자열에서 숫자만 추출해 반환하는 함수
 *  @param text - 변환할 원본 문자열
 *  @returns 숫자만 남은 문자열
 */
 export const extractNumbers = (text: string):string =>{

     if((typeof text !== "string"))
     {
         console.log('[func:numberOnly]매개변수타입 확인');
         console.log('[func:numberOnly]타입:',typeof text);
         return '';
     }
     return text.trim().replace(/[^0-9]/g , '');
}