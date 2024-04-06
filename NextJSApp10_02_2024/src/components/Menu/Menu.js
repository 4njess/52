import Link from "next/link";
import styles from "./Menu.module.css"


export default function Menu() {
  return (
      <ul  className={styles.menu}>
        <li  className={styles.link}><Link href={'/'}>Домашная</Link></li>
        <li className={styles.link}><Link href={'/contacts'}>Контакты</Link></li>
        <li className={styles.link}><Link href={'/cab'}>Кабинет</Link></li>
      </ul>
  );
}
