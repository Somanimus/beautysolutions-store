import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../use-localstorage";
import i18n from '../../i18n';

const Navbar = () => {
    const { basket } = useSelector((state) => state.basket);
    const [modal, setModal] = useState(false);

    const { t } = useTranslation()
    const [language, setLanguage] = useLocalStorage('language', 'ru')

    const handleLanguageChange = (lang) => {
        if (lang === 'ru') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
        } else if (lang === 'en') {
            i18n.changeLanguage('en');
            setLanguage('en');
        }
    };
    return (
        <header className={` ${styles.header}`}>
            <nav className={`container ${styles.nav}`}>
                <Link href="/">
                    <a>
                        <div className={styles.nav_logo}>
                            <span>Beauty Solution</span>
                        </div>
                    </a>
                </Link>

                <ul className={styles.nav_list}>

                    {/* <li>
                        <Link href="/about">
                            <a>{t('footerAboutUs')}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/catalog">
                            <a>{t('catalog')}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            <a>{t('contacts')}</a>
                        </Link>
                    </li> */}
                                            <li>
                            <Link href="/about">
                                <a>{t('footerAboutUs')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/catalog">
                                <a>{t('catalog')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <a>{t('contacts')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">
                                <a>{t('shop')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/terms"}>
                                <a>{t('termsOfUse')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/privacy"}>
                                <a>{t('confidentiality')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/delivery"}>
                                <a>{t('shippingPolicy')}</a>
                            </Link>
                        </li>
                </ul>

                <div className={styles.basket_icon}>
                    <Link href="/cart">
                        <a>
                            <Image className={styles.basket_svg}
                                src="/shopping-bag.svg"
                                alt="Logo"
                                width={24}
                                height={24}
                            />
                            {basket.length ? (
                                <div className={styles.basket_length}>
                                    {basket.length}
                                </div>
                            ) : (
                                ""
                            )}
                        </a>
                    </Link>
                </div>

                <div className={styles.languageBlock}>
                    <button onClick={() => handleLanguageChange('ru')}>РУС</button>
                    <button onClick={() => handleLanguageChange('en')}>EN</button>
                </div>

                <div className={styles.burger} onClick={() => setModal(!modal)}>
                    <div className={styles.burger_content} />
                </div>

                <div
                    className={styles.modal}
                    style={!modal ? { display: "none" } : {}}
                >
                    <ul className={styles.list_mobile}>
                        <li>
                            <Link href="/about">
                                <a>{t('footerAboutUs')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/catalog">
                                <a>{t('catalog')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <a>{t('contacts')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">
                                <a>{t('shop')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/terms"}>
                                <a>{t('termsOfUse')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/privacy"}>
                                <a>{t('confidentiality')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/delivery"}>
                                <a>{t('shippingPolicy')}</a>
                            </Link>
                        </li>
                    </ul>
                    <div
                        className={styles.modal_close_position}
                        onClick={() => setModal(!modal)}
                    >
                        <div className={styles.modal_close}></div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
