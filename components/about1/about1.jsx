import React, { useTranslation } from "react-i18next";
import styles from "./about1.module.css";

import Image from "next/image";

const About = () => {
    const { t } = useTranslation()

    return (
        <section className="container">
            <hr />

            <div className={styles.about__content}>
                <h2>{t('whoAreWe')}</h2>

                <div className={styles.about_div}>
                    <p>{t('aboutUs1')}</p>
                </div>
                <div className={styles.about_div}>
                    <p>{t('aboutUs2')}</p>
                    <p>{t('aboutUs3')}</p>
                </div>
                <div className={styles.about_div}>
                    <p>{t('aboutUs4')}</p>
                    <p>{t('aboutUs5')}</p>
                </div>
                <div className={styles.about_div}>
                    <p>{t('aboutUs6')}</p>
                    <p>{t('aboutUs7')}</p>
                </div>
            </div>
            <hr />
        </section>
    );
};

export default About;
