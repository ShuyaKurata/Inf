import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../css/CardFlip.module.css';
import { useGSAP } from '@gsap/react';
import logo from '../logo192.png';

gsap.registerPlugin(ScrollTrigger);

const CardFlip = () => {
    const container = useRef();
    const leftCard = useRef();
    const rightCard = useRef();

    // 共通のアニメーション処理
    const createCardAnimation = (cardClass, cardRef, options) => {
        let isHalfway = false;  // 50%を超えたかどうかを管理
        let direction;
        if (options.left) {
            direction = 1;
        } else {
            direction = -1;
        }

        gsap.to(cardClass, {
            scrollTrigger: {
                trigger: container.current,
                start: "0% 0%",
                end: "200% bottom",
                // markers: true,
                scrub: true,
                pin: options.pin || false,
                // onEnter: () => gsap.to(cardClass, { zIndex: 2 }),
                // onLeaveBack: () => gsap.to(cardClass, { zIndex: 1 }),
                onUpdate: (self) => {
                    const progress = self.progress;

                    // 進行具合に応じたアニメーション
                    if (progress <= 0.5) {
                        gsap.to(cardClass, {
                            x: 5 * progress * direction + 'vw',  // 最初の50%は右に移動
                        });

                        if (isHalfway) {
                            if (options.left) {
                                cardRef.current.classList.remove(styles.isActive);
                            } else {
                                cardRef.current.classList.add(styles.isActive);
                            }
                            isHalfway = false;

                        }
                    } else {
                        gsap.to(cardClass, {
                            x: 5 * (1 - progress) * direction + 'vw',
                        });

                        if (!isHalfway) {
                            if (options.left) {
                                cardRef.current.classList.add(styles.isActive);
                            } else {
                                cardRef.current.classList.remove(styles.isActive);
                            }
                            isHalfway = true;

                        }
                    }
                },
            }
        });
    };

    useGSAP(() => {
        // 左のカード用のアニメーション
        createCardAnimation(`.${styles.leftCard}`, leftCard, {
            pin: true,  // 左のカードのみpin
            left: true,  // 正の方向
        });

        // 右のカード用のアニメーション
        createCardAnimation(`.${styles.rightCard}`, rightCard, {
            left: false,  // 負の方向
        });

        gsap.to(`.${styles.logo}`, {
            rotate: 360, // 回転させる角度
            y: container.current.offsetHeight,
            scrollTrigger: { // scrollTriggerオブジェクトの定義
                trigger: container.current, // トリガーになる要素
                start: "top top", // スクロール位置を指定
                end: "200% bottom",   // スクロール終了位置
                scrub: true,         // スクロールに応じてアニメーション
            },
        });

    },
        { scope: container }
    );

    return (
        <div className={styles.container} ref={container}>
            <div className={styles.cardContainer} >
                <div ref={leftCard} className={`${styles.card} ${styles.leftCard}`}>
                    <div className={styles.cardContent}>
                        BRIDGE
                        <p>We make a new GAME</p>
                    </div>

                </div>
                <div ref={rightCard} className={`${styles.card} ${styles.rightCard} ${styles.isActive}`}>
                    <div className={styles.cardContent}>ARROW
                        <p>We make enjoyable SERVIES</p>
                    </div>

                </div>
            </div>
            <div className={styles.img}>
                <img src={logo} alt="Arridge Logo" className={styles.logo} />
            </div>
        </div>
    );
};

export default CardFlip;
