import React from 'react';
import Button from '../Button/Button';
import styles from './HeroContent.module.scss';

function HeroContent() {
    return (
        <section className={styles['hero__content']}>
            <div className={styles['hero__content-container']}>
            <div className={styles['hero__content-title-container']}>
                <h1 className={styles['hero__content-title']}>
                    Authentic italian pizzeria
                </h1>
                <p className={styles['hero__content-description']}>
                    Et praesent nulla urna consequat dui arcu cursus diam fringilla libero risus, aliquam diam, aliquam ullamcorper urna pulvinar velit suspendisse aliquam lacus sollicitudin mauris.
                </p>
            </div>
            <div className={styles['hero__content-buttons-container']}>
                <Button variant="filled-button" children="book a table" />
                <Button variant="plain-button" children="takeaway" />
            </div>
            </div>
        </section>
    )
}

export default HeroContent;
