import 'normalize.css';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>

      <h2 className={styles.logo}>CRUD<span>React</span></h2>

      <ul className={styles.lista}>
        <li className={styles.item}>
          Home
        </li>
        <li className={styles.item}>
          Sobre nós
        </li>
        <li className={styles.item}>
          Produtos
        </li>
        <li className={styles.item}>
          Contato
        </li>
      </ul>
    </nav>
  );
}