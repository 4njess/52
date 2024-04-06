'use client'
import react, {useRef, useState} from "react";
import { Toaster } from "sonner";
import { LoginForm } from "./LoginForm";
import { RecoveryForm } from "./RecoveryForm";
import { RegistrationForm } from "./RegistrationForm";



export const Auth = ()=>{

    const [link, setLink] = useState('login');

    return (
        <>
        <div style={{display: "flex", flexDirection: "column"}}>        
        <ul >
            <a style={{cursor:"pointer", marginRight: 10}} onClick={()=>setLink('log')}>Авторизация</a>
            <a style={{cursor:"pointer", marginRight: 10}} onClick={()=>setLink('rec')}>Восстановление</a>
            <a style={{cursor:"pointer", marginRight: 10}} onClick={()=>setLink('reg')}>Регистрация</a>
        </ul>
        {link === 'log' &&(
        <LoginForm></LoginForm>)}
        {link === 'rec' &&(
        <RecoveryForm></RecoveryForm>)}
        {link === 'reg' &&(
        <RegistrationForm></RegistrationForm>)}
        </div>
      <Toaster position="bottom-center" expand={false} richColors></Toaster>
      </>
    )
}