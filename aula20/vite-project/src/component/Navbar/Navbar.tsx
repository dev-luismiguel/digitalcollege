import { TextLink } from '../TextLink/TextLink';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.menu}>
        <TextLink>
          Início
        </TextLink>
        <TextLink>Sobre</TextLink>
        <TextLink>Contato</TextLink>
      </div>

      <div>
        <div className={styles.logo}>Logo</div>
        <div className={styles.menu}>
          <TextLink>
            Menu
          </TextLink>
        </div>
      </div>
    </div>
  );
};
