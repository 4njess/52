'use client'
import axios from "axios";
import react, {useRef} from "react";
import { toast, Toaster } from "sonner";


export const RecoveryForm = ()=>{

    const inputLogin = useRef(null);
    const inputEmail = useRef(null);

    const changeLogin = (e) =>{
        e.preventDefault();

        const login = inputLogin.current.value;
        console.log(login);
        const email = inputEmail.current.value;
        console.log(login);

        axios.post('/api/recovery', {login, email}, {
            withCredentials: false,
        }).then(() => {
            toast.success('Инструкция по восстановлению отправлена !')
        }).catch(()=>{
            toast.error('Не удалось найти аккаунт с таким логином')
        })
    }

    return (
        <>
       
        <h3 style={{marginTop: 20, marginBottom: 10}}>Восстановление</h3>
        <form  style={{display: "flex", flexDirection: "column"}} onSubmit={e => changeLogin(e)}>   

        <h4 style={{marginTop:10}}>Введите логин от забытого аккаунта:</h4>
        <input style={{marginTop:10}} ref={inputLogin}  placeholder="логин" ></input>
        <h4 style={{marginTop:10}}>Введите почту к которой привязан аккаунт:</h4>
        <input style={{marginTop:10}} ref={inputEmail} placeholder="почта"></input>
        <button style={{marginTop:20, width: 200, height: 36}} type="submit" >Войти</button>
      </form>  

      <Toaster position="bottom-center" expand={false} richColors></Toaster>
      </>
    )
}