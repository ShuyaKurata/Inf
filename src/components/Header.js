// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Header.module.css'; // CSS Modules をインポート
import logo from '../icon.png.png'; // 新しい画像のパス

const Header = () => (
    <header>
        <div className={styles.nav}>
            <Link to="/" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <img src={logo} alt="Arridge Logo" className={styles.logo} />
            </Link>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link></li>
                    <li className={styles.navItem}><Link to="/about" className={styles.navLink}>About</Link></li>
                    <li className={styles.navItem}><Link to="/services" className={styles.navLink}>Services</Link></li>
                    <li className={styles.navItem}><Link to="/projects" className={styles.navLink}>Projects</Link></li>
                    <li className={styles.navItem}><Link to="/contact" className={styles.navLink}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;


