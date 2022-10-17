import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <p className={styles.nome}>Bruno Sabbag Machado</p>

      <ul className={styles.social}>
        <li>
          <a href='https://github.com/brunosabbagmachado'><FaGithub /></a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/brunosabbagmachado/'><FaLinkedinIn /></a>
        </li>
        <li>
          <a href='bsm.1997@hotmail.com'><AiOutlineMail /></a>
        </li>
      </ul>

      <p className={styles.copy_right}>
        Barbearia &copy; 2021
      </p>

    </footer>
  );
}