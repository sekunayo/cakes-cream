import styles from './Banner.module.scss';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import HeroContent from '../HeroContent/HeroContent';


const Banner = () => {
    return (
        <main className={styles['banner']}>
            <Header />
            <Navbar />
            <HeroContent />

        </main>
    )
}

export default Banner
