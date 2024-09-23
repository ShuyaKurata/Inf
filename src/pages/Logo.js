import React, { useRef } from 'react';
import styles from '../css/Logo.module.css';
import Lottie from 'react-lottie';
import animationData from '../Flow 2';

const Logo = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className={styles.div}>
            <Lottie
                options={defaultOptions}
            />
        </div>
    );
}

export default Logo;
