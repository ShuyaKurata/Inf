import React from 'react';
import styles from '../css/Progress.module.css';

const tasks = [
    { name: '1bit', progress: 80, level: 1 },
    { name: 'homepage', progress: 65, level: 1 },
    { name: '知名度あげ', progress: 10, level: 1, special: true }, // 特別な要素
    { name: 'reiwa', progress: 20, level: 2 },
    { name: 'banksy', progress: 70, level: 2 },
    { name: 'すれちがい', progress: 35, level: 2 },
    { name: '津幡土下座', progress: 0, level: 3 },
    { name: '通貨', progress: 0, level: 4 },
    { name: 'ゲーム', progress: 5, level: 4 },
];

const ProgressCircle = ({ task }) => {
    const waterStyle = task.special
        ? styles.specialWater  // 特別な要素の場合、異なる色の水
        : styles.water;

    return (
        <div className={styles.circleContainer}>
            <div className={styles.circle}>
                <div
                    className={waterStyle}
                    style={{ height: `${task.progress}%` }}
                />
                <span className={styles.taskName}>{task.name}</span>
                <span className={styles.progress}>{task.progress}%</span>
            </div>
        </div>
    );
};

const ProgressTree = () => {
    const renderLevel = (level) => {
        return tasks
            .filter(task => task.level === level)
            .map((task, index) => <ProgressCircle key={index} task={task} />);
    };

    return (
        <div className={styles.tree}>
            <div className={styles.level}>{renderLevel(1)}</div>
            <div className={styles.level}>{renderLevel(2)}</div>
            <div className={styles.level}>{renderLevel(3)}</div>
            <div className={styles.level}>{renderLevel(4)}</div>
        </div>
    );
};

export default ProgressTree;
