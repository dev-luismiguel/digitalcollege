import { TextLinkProps } from "./TextLink.props";

import styles from "./TextLink.module.css";

export const TextLink: React.FC<TextLinkProps> = ({ children, onClick }) => (
  <a className={styles.menuLink} onClick={onClick}>
    {children}
  </a>
);
