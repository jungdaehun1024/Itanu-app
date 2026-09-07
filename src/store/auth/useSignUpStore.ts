import {create} from "zustand";
import {extractNumbers} from "../../utils/format.ts";
interface SignUpState {
    id: string;
    password: string;
    phone: string;
    email: string;
    name: string;
    nickname: string;
    setId:(id:string) => void;
    setPassword:(password:string) => void;
    setPhone:(phone:string) => void;
    setEmail:(email:string) => void;
    setName:(name:string) => void;
    setNickname:(nickname:string) => void;

}
export const useSignUpStore = create<SignUpState>((set)=>({
    id: '',
    password: '',
    phone:'',
    email:'',
    name:'',
    nickname:'',

    setId: (id)=>set({id}),
    setPassword: (password) => set({ password }),

    //전화번호는 숫자만 받도록
    setPhone: (phone) =>{
      const extracted = extractNumbers(phone);
      set({phone:extracted});
    },
    setEmail: (email) => set({email}),
    setName: (name)=>set({name}),
    setNickname: (nickname) => set({nickname}),
}));