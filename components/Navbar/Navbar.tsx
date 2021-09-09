import React from 'react';

import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles['nav']}>
            <ul className={styles['nav__container']}>
                <a className={styles['nav__links']}>
                <li>Home</li>
                </a>
                <a className={styles['nav__links']}>
                <li>Cakes</li>
                </a>
                <a className={styles['nav__links']}>
                <li>Cream</li>
                </a>
                <a className={styles['nav__links']}>
                <li>About</li>
                </a>
                <a className={styles['nav__links']}>
                <li>Offers</li>
                </a>
                <a className={styles['nav__links']}>
                <li>Contact</li>
                </a>
            </ul>
        </nav>
    )
}


export default Navbar;