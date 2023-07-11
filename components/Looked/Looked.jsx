import React from 'react';
import styles from './Looked.module.css';

import Image from 'next/image';
import LoadMore from '../LoadMore/LoadMore';
import { useTranslation } from 'react-i18next';

const BestCard = (props) => {
    const {t} = useTranslation()

    return (
        <div className={styles.best_card}>
            <div className={styles.image_wrapper}>
                <Image
                    src='/kreslo.png'
                    alt='sofa img'
                    width={154}
                    height={156}
                />
            </div>
            <div className={styles.line}></div>
            <div className={styles.best_center}>
                <div className={styles.best_card_name}>{t('chairSwoon')}</div>
                <div className={styles.best_card_descr}>
                    {t('fishText')}
                </div>
                <div className={styles.best_card_price}>15 040 $</div>
            </div>
            <div className={styles.best_card_btn}>{t('inBasket')}</div>
        </div>
    );
};

const Look = () => {
    return (
        <div className='gray_bg'>
            <div className={styles.best_container}>
                <h2>{t('youWatchingLater')}</h2>
                <div className={styles.best_card_wrapper}>
                    <BestCard />
                    <BestCard />
                    <BestCard />
                    <BestCard />
                </div>
            </div>
            <LoadMore />
        </div>
    );
};

export default Look;
