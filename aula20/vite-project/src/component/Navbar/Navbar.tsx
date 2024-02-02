import { TextLink } from "../TextLink/TextLink";
import styles from "./Navbar.module.css";
import { NavbarProps } from "./Navbar.props";

export const Navbar: React.FC<NavbarProps> = ({ onFilterChange, title }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>{title}</div>
      <input
        className={styles.inputField}
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <div className={styles.navLinks}>
        <TextLink>Início</TextLink>
        <TextLink>Sobre</TextLink>
        <TextLink>Contato</TextLink>
      </div>
      <div className={styles.logo}>Logo</div>
    </div>
  );
};
