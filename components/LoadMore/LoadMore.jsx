import React from 'react';
import styles from './LoadMore.module.css';
import { useTranslation } from 'react-i18next';

const LoadMore = ({ click = () => {} }) => {
    const {t} = useTranslation()

    return (
        <div className={styles.more_wrapper}>
            <div className={styles.more} onClick={click}>{t('watchMore')}</div>
        </div>
    );
};

export default LoadMore;
