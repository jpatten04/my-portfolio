import {HashLink} from 'react-router-hash-link';
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <HashLink smooth to="/#home">Home</HashLink>
            <HashLink smooth to="/#about">About</HashLink>
            <HashLink smooth to="/#projects">Projects</HashLink>
            <HashLink smooth to="/#contact">Contact</HashLink>
        </div>
    )
}