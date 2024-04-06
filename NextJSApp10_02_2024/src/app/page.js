
import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";

export const metadata ={
  title: 'Домашная',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu></Menu>
      <div className={styles.center}> 
        <h3>Сайт на nextjs</h3>
      </div> 
      <p className={styles.text}> Домашная </p>
    </main>
  );
}
