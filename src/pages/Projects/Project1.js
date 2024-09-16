// src/pages/Project1.js
import React from 'react';
import styles from '../../css/Project1.module.css';

const Project1 = () => {
    return (
        <section className={styles.projectDetail}>
            <div className={styles.projectHeader}>
                <h1>1bit 戦争</h1>
                <p>戦略的な1bitグラフィックの戦争ゲーム</p>
            </div>
            <div className={styles.projectContent}>
                <img src="path/to/project1-image.jpg" alt="1bit 戦争" className={styles.projectImage} />
                <p>「1bit 戦争」は、シンプルながらも戦略性の高い1bitグラフィックの戦争ゲームです。プレイヤーは限られたリソースを使って、敵軍との戦いを繰り広げます。各ユニットは1bitのピクセルアートで表現され、クラシックなゲームプレイを楽しむことができます。</p>
                <p>主な特徴:</p>
                <ul>
                    <li>シンプルな1bitグラフィックスタイル</li>
                    <li>戦略的なゲームプレイ</li>
                    <li>直感的な操作</li>
                    <li>複数のステージと敵キャラクター</li>
                </ul>
            </div>
            <div className={styles.projectFooter}>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.btn}>詳細を見る</a>
            </div>
        </section>
    );
};

export default Project1;
