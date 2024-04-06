'use client'
import axios from "axios";
import react, {useRef} from "react";
import { toast, Toaster } from "sonner";


export const LoginForm = ()=>{

    const inputLogin = useRef(null);
    const inputPassword = useRef(null);

    const changeLogin = (e) =>{
        e.preventDefault();

        const login = inputLogin.current.value;
        console.log(login);
        const password = inputLogin.current.value;
        console.log(login);

        axios.post('/api/login', {login, password}, {
            withCredentials: false,
        }).then(() => {
            toast.success('Авторизация пройдена')
        }).catch(()=>{
            toast.error('Авторизация не удалась')
        })
    }

    return (
        <>
        <h3 style={{marginTop: 20, marginBottom: 10}}>Авторизация</h3>
        <form  style={{display: "flex", flexDirection: "column"}} onSubmit={e => changeLogin(e)}>
        <h3 style={{marginTop:10}}>Логин</h3>
        <input style={{marginTop:10}} ref={inputLogin}  placeholder="логин1" ></input>
        <h3 style={{marginTop:10}}>Пароль</h3>
        <input style={{marginTop:10}} ref={inputPassword} placeholder="пароль"></input>
        <button style={{marginTop:20, width: 200, height: 36}} type="submit" >Войти</button>
      </form>  
      <Toaster position="bottom-center" expand={false} richColors></Toaster>
      </>
    )
}