import React, { useTranslation } from "react-i18next";
import styles from "./about1.module.css";

import Image from "next/image";

const About = () => {
    const {t} = useTranslation()

    return (
        <section className="container">
            <div className={styles.about__content}>
                <div className={styles.about_left}>
                    <h1 className={styles.about_h1}>{t('aboutUs')}</h1>
                    <p className={styles.about_p}>
                        {t('thisPageIsNull')}
                   </p>
                </div>

                <div className={styles.about_right}>
               </div>
            </div>
            <div className={styles.dop_info}>
                <p>
               </p>
            </div>
               <hr />
        </section>
    );
};

export default About;
