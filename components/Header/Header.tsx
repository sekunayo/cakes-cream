import React from 'react';
import styles from '../Header/Header.module.scss';
import Button from '../Button/Button';

const Header = () => {
    return (
        <header className={styles["header"]}>
            <div className={styles["header__social-icons"]}>
              <div>
              {/* <img src="/assets/icons/twitter.svg"/> */} 
              <p>a</p>
              </div>
              <div>
              {/* <img src="/assets/icons/twitter.svg"/> */}
              <p>a</p>
              </div>
              <div>
              <p>a</p>
              {/* <img src="/assets/icons/twitter.svg"/> */}
              </div>
            </div>
            <div className={styles["header__logo"]}>
                <h1>Cakes & Cream</h1>
            </div>
            <Button variant="plain-button" children="Order Online"/>
        </header>
    )
}

export default Header
