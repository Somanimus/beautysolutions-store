import React from 'react';
import Image from 'next/image';
import styles from './Withus.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
       </div>
    );
};

const Card2 = () => {
    return (
        <div className={styles.card}>
       </div>
    );
};

const Card3 = () => {
    return (
        <div className={styles.card}>
        <Image src={'/public/hero.png'} width={'100%'} height={'100%'} />
       </div>
    );
};

const Card4 = () => {
    return (
        <div className={styles.card}>
       </div>
    );
};

export default function WithUs() {
    return (
        <div className='gray_bg'>
            <div className="container">
                <h2 className='text-center'>С Нами</h2>
                <div className={styles.card_wrapper}>
                    <Card />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                </div>
            </div>
        </div>
    );
}
