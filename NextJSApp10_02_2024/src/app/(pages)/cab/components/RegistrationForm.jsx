'use client'
import axios from "axios";
import react, {useRef} from "react";
import { toast, Toaster } from "sonner";


export const RegistrationForm = ()=>{

    const inputLogin = useRef(null);
    const inputEmail = useRef(null);
    const inputPassword = useRef(null);

    const changeLogin = (e) =>{
        e.preventDefault();

        console.log(inputLogin)

        const login = inputLogin.current.value;
        console.log(login);
        const password = inputPassword.current.value;
        console.log(login); 
        const email = inputEmail.current.value;
        console.log(login);

        axios.post('/api/registration', {login, password, email}, {
            withCredentials: false,
        }).then(() => {
            toast.success('Регистрация завершена !')
        }).catch(()=>{
            toast.error('Регистрация не удалась, такой логин уже используется ')
        })
    }

    return (
        <>
        <h3  style={{marginTop: 20, marginBottom: 10}}>Регистрация</h3>
        <form  style={{display: "flex", flexDirection: "column"}} onSubmit={e => changeLogin(e)}>
        <h4 style={{marginTop:10}}>Почта</h4>
        <input style={{marginTop:10}} ref={inputEmail}  placeholder="почта" ></input>
        <h4 style={{marginTop:10}}>Логин</h4>
        <input style={{marginTop:10}} ref={inputLogin}  placeholder="логин" ></input>
        <h4 style={{marginTop:10}}>Пароль</h4>
        <input style={{marginTop:10}} ref={inputPassword} placeholder="пароль"></input>
        <button style={{marginTop:20, width: 200, height: 36}} type="submit" >Зарегестрироваться</button>
      </form>  
      <Toaster position="bottom-center" expand={false} richColors></Toaster>
      </>
    )
}