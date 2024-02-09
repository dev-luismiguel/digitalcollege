import { TextLink } from "../TextLink/TextLink";
import styles from "./Navbar.module.css";
import { NavbarProps } from "./Navbar.props";
import { ROUTES } from "../../pages/routes";

export const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>{title}</div>
      <div className={styles.navLinks}>
        <TextLink to={ROUTES.Home}>Início</TextLink>
        <TextLink to={ROUTES.About + "Testeeee"}>Sobre</TextLink>
      </div>
      <div className={styles.logo}>Logo</div>
    </div>
  );
};
