import React, { useRef } from 'react';
import styles from '../css/Cube.module.css'; // CSSモジュールをインポート
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Cube = () => {

    const scene = useRef();
    const cube = useRef();

    useGSAP(() => {
        // スクロール時のテキストサイズ変更
        gsap.to(cube.current, {
            // fontSize: '2rem', // 最小のフォントサイズ
            // ease: 'power1.in',
            // rotateY: "405deg", // 回転させる角度
            // scale: 3,
            // opacity: 1,
            scrollTrigger: {
                trigger: scene.current,
                start: 'top top',
                end: '400% 40%',
                scrub: true,
                markers: true, // デバッグ用のマーカー
                pin: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const transform = cube.current.transform;
                    console.log(transform);
                    console.log(progress);
                    if (progress <= 0.25 && progress > 0.2) {
                        gsap.to(cube.current, {
                            rotateY: "0deg",
                        });
                    } else if (progress <= 0.5 && progress > 0.25) {
                        gsap.to(cube.current, {
                            rotateY: "-90deg",
                        });
                    } else if (progress <= 0.75 && progress > 0.5) {
                        gsap.to(cube.current, {
                            rotateY: "-180deg",
                        });
                    } else if (progress <= 1 && progress > 0.75) {
                        gsap.to(cube.current, {
                            rotateY: "-270deg",
                        });
                    }
                }
            },
        });
    },
        { scope: scene }
    );

    return (
        <div className={styles.scene} ref={scene}>
            <div className={styles.cube} ref={cube}>
                <div className={`${styles.face} ${styles.side1}`}></div>
                <div className={`${styles.mainFace} ${styles.side2}`}>
                    1
                </div>
                <div className={`${styles.face} ${styles.side3}`}></div>
                <div className={`${styles.mainFace} ${styles.side4}`}>
                    2
                </div>
                <div className={`${styles.face} ${styles.side5}`}></div>
                <div className={`${styles.mainFace} ${styles.side6}`}>
                    3
                </div>
                <div className={`${styles.face} ${styles.side7}`}></div>
                <div className={`${styles.mainFace} ${styles.side8}`}>
                    4
                </div>

            </div>
        </div>
    );
}

export default Cube;