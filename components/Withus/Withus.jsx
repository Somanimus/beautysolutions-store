import React from 'react';
import Image from 'next/image';
import styles from './Withus.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <img src='https://static2.waybeauty.pl/pol_pm_APIS-MYSTIC-OUD-Nawilzajacy-zel-do-mycia-ciala-300-ml-14318_2.jpg'
            className={styles.card_image}
            />
            <div className={styles.card_flex}>
                <h3>Выгодно</h3>
            </div>
            <div className={styles.card_info}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dignissimos obcaecati ratione aspernatur molestiae beatae sint, voluptatibus perferendis exercitationem harum? Culpa at mollitia suscipit quas odio ex, ratione cumque dolorum.</p>
            </div>
            <div className={styles.card_price}>
                <p>800 $</p>
            </div>
        </div>
    );
};

const Card2 = () => {
    return (
        <div className={styles.card}>
            <img
            src='https://static2.waybeauty.pl/pol_pm_WELLNESS-PREMIUM-PRODUCTS-Dry-Professional-Hairspray-extra-strong-hold-400ml-14151_3.jpg'
            className={styles.card_image}
            />
            <div className={styles.card_flex}>
                <h3>Выгодно</h3>
            </div>
            <div className={styles.card_info}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dignissimos obcaecati ratione aspernatur molestiae beatae sint, voluptatibus perferendis exercitationem harum? Culpa at mollitia suscipit quas odio ex, ratione cumque dolorum.</p>
            </div>
            <div className={styles.card_price}>
                <p>800 $</p>
            </div>
        </div>
    );
};

const Card3 = () => {
    return (
        <div className={styles.card}>
            <img
            src='https://static2.waybeauty.pl/pol_pm_WELLNESS-PREMIUM-PRODUCTS-zestaw-kul-do-kapieli-6szt-14152_4.jpg'
            className={styles.card_image}
            />
            <div className={styles.card_flex}>
                <h3>Выгодно</h3>
            </div>
            <div className={styles.card_info}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dignissimos obcaecati ratione aspernatur molestiae beatae sint, voluptatibus perferendis exercitationem harum? Culpa at mollitia suscipit quas odio ex, ratione cumque dolorum.</p>
            </div>
            <div className={styles.card_price}>
                <p>800 $</p>
            </div>
        </div>
    );
};

const Card4 = () => {
    return (
        <div className={styles.card}>
            <img
            src='https://waybeauty.pl/pol_il_WELLNESS-PREMIUM-PRODUCTS-Masazer-do-wlosow-rozowy-14150.jpg'
            className={styles.card_image}
            />
            <div className={styles.card_flex}>
                <h3>Выгодно</h3>
            </div>
            <div className={styles.card_info}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dignissimos obcaecati ratione aspernatur molestiae beatae sint, voluptatibus perferendis exercitationem harum? Culpa at mollitia suscipit quas odio ex, ratione cumque dolorum.</p>
            </div>
            <div className={styles.card_price}>
                <p>800 $</p>
            </div>
        </div>
    );
};

export default function WithUs() {
    return (
        <div className='gray_bg'>
            <div className="container">
                <h2>С Нами</h2>
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
