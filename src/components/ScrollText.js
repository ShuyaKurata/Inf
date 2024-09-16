import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../css/ScrollText.module.css';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ScrollText = () => {
    const container = useRef();
    const largeTextRef = useRef(null);

    useGSAP(() => {
        // スクロール時のテキストサイズ変更
        gsap.to(largeTextRef.current, {
            // fontSize: '2rem', // 最小のフォントサイズ
            ease: 'power1.in',
            scale: 0.2, // 最小のスケール
            scrollTrigger: {
                trigger: largeTextRef.current,
                start: 'top center',
                end: 'bottom 40%',
                scrub: true,
                // markers: true, // デバッグ用のマーカー
                pin: true,
            },
        });
    },
        { scope: container }
    );

    return (
        <div className={styles.container} ref={container}>
            <div className={styles.textContainer}>
                <h1 ref={largeTextRef} className={styles.largeText}>
                    おもしろいと思ったことをする
                </h1>
            </div>
            <div className={styles.staticTextContainer}>
                <p className={styles.staticText}>
                    ひとりひとりに革新的なアイデアがあるはず。
                </p>
                <p className={styles.staticText}>
                    私たちには実現できる技術があります。
                </p>
            </div>
        </div>
    );
};

export default ScrollText;
