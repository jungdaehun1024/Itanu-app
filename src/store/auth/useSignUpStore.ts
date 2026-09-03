import {create} from "zustand";
import {extractNumbers} from "../../utils/format.ts";
interface SignUpState {
    id: string;
    password: string;
    phone: string;
    setId:(id:string) => void;
    setPassword:(password:string) => void;
    setPhone:(phone:string) => void;
}
export const useSignUpStore = create<SignUpState>((set)=>({
    id: '',
    password: '',
    phone:'',
    setId: (id)=>set({id}),
    setPassword: (password) => set({ password }),

    //전화번호는 숫자만 받도록
    setPhone: (phone) =>{
      const extracted = extractNumbers(phone);
      set({phone:extracted});
    }
}));