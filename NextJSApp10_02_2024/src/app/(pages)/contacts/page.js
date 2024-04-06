import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";
export const metadata ={
  title: 'Контакты',
}

export default function Contacts() {
  return (
    
    <main className={styles.main}>
      
    <Menu></Menu>
      <div className={styles.center}> 
        <div className={styles.contacts}>
        <p>Телефон: адмнистрация: +75352523424</p>
        <p>Моб.телефон: оператор: +79995321128</p>
        <p>Моб.телефон: оператор:  +79091186388</p>
        <p>Почта для связи: abcefg@gmail.com</p>
        </div>
      </div>
      <p className={styles.text}>Контакты</p>
    </main>
  );
}
