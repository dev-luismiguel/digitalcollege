import { TextLink } from "../TextLink/TextLink";
import styles from "./Navbar.module.css";
import { NavbarProps } from "./Navbar.props";

export const Navbar: React.FC<NavbarProps> = ({ onFilterChange }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <input
        className={styles.inputField}
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <div>
        <div className={styles.logo}>Logo</div>
        <div className={styles.menu}>
          <TextLink>Menu</TextLink>
        </div>
      </div>
    </div>
  );
};
