import React from "react";
import styles from "./Contacts.module.css";
import { useTranslation } from "react-i18next";

const Contacts = () => {
    const {t} = useTranslation()

    return (
        <section className={"container "}>
            <div className={styles.contacts_left}>
                <h1 className={styles.contacts_h1}></h1>
                <p className={styles.contacts_p}></p>
                <p className={styles.contacts_p}></p>
            </div>

            <div className={styles.contacts_right}>
                <h1 className={styles.contacts_h1}></h1>
                <p className={styles.contacts_p}>
                    {t('mail')}:{" "}
                    <a href=""></a>
                </p>
            </div>
            <div className={styles.iframe}>
           </div>
        </section>
    );
};

export default Contacts;
