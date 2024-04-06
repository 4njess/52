import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";
import { LoginForm } from "./components/LoginForm";
import { Auth } from "./components/Auth";

export const metadata ={
  title: 'Кабинет',
}
export default function Cab() {
  return (
    <main className={styles.main}>     
       <Menu></Menu>
      <div className={styles.center}>
        <Auth></Auth>
      </div>
     <p className={styles.text}> Кабинет </p>
    </main>
  );
}
