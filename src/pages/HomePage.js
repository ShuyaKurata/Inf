import React, { useEffect, useRef } from 'react';
import styles from '../css/HomePage.module.css';
import ShapesOverflowAnimation from './ShapesOverflowAnimation';
import CardFlip from '../components/CardFlip';
import ScrollText from '../components/ScrollText';
import SvgText from '../components/SvgText';
import SvgWave from '../components/SvgWave';
import Cube from '../components/Cube';

const HomePage = () => {
    const lastScrollTopRef = useRef(0);

    useEffect(() => {
        const headers = document.querySelectorAll(`.${styles.textSection} h2`);
        const stickySections = document.querySelectorAll(`.${styles.sticky_wrap}`);


        function transform(section) {
            if (!section) {
                console.error("Section is null");
                return;
            }

            const offsetTop = section.parentElement.offsetTop;
            const scrollSection = section.querySelector(`.${styles.horizontal_scroll}`);

            if (!scrollSection) {
                console.error("scrollSection is null");
                return;
            }

            let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
            percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;

            scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
        }



        const handleScroll = (e) => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            //slideSelectionが通り過ぎないように
            stickySections.forEach(section => {
                transform(section);
            });


            lastScrollTopRef.current = scrollPosition;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.homePage}>
            <ShapesOverflowAnimation />
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Arridge</h1>
                </div>
            </div>
            <div className={styles.scroll_container}>
                <div className={styles.sticky_wrap}>
                    <div className={styles.horizontal_scroll}>
                        <div className={`${styles.scroll_contents} ${styles.left}`}>
                            Hello
                        </div>
                        <div className={styles.scroll_contents}>WHAT'S </div>
                        <div className={styles.scroll_contents}>ARRIDGE?</div>
                        <div className={`${styles.scroll_contents} ${styles.right}`}>
                            SCROLL!
                        </div>
                    </div>
                </div>
            </div>
            <CardFlip />
            <ScrollText></ScrollText>
            <SvgText />
            <Cube></Cube>
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <h2>イノベーションの力</h2>
                    <SvgWave />

                    <p>最新技術を使って、未来を形作ります。</p>
                </div>
                <div className={styles.textSection}>
                    <h2>クリエイティビティの探求</h2>
                    <p>あなたのアイデアを現実に。</p>
                </div>
                <div className={styles.textSection}>
                    <h2>次世代のゲーム開発</h2>
                    <p>エキサイティングな体験を提供します。</p>
                </div>
            </div>
        </div >
    );
};

export default HomePage;
