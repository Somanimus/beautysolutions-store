import React, { useEffect } from 'react';
import styles from './Footer.module.css';
import visa from '../../public/visa.png';
import { useDispatch, useSelector } from "react-redux";
import { getCotegories } from "../../redux/action/categoriesAction";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import Image from "next/image";

const Footer = () => {
    const { t } = useTranslation()

    const { categories } = useSelector(state => state.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCotegories())
    }, [dispatch])
    return (
        <footer>
            <div className={"container " + styles.footer}>
                {/* <div>
                    <ul className={styles.footer_ul}>
                        <Link href={'/about'}>
                            <a ><li>{t('footerAboutUs')}</li></a>

                        </Link>
                        <Link href={"/goodCreadit"}>
                            <a><li>{t('itemsInCredit')}</li></a>
                        </Link>
                        <Link href={"/shares"}>
                            <a><li>{t('stock')}</li></a>
                        </Link>
                        <Link href={"/terms"}>
                            <a><li>{t('termsOfUse')}</li></a>
                        </Link>
                        <Link href={"/privacy"}>
                            <a><li>{t('confidentiality')}</li></a>
                        </Link>
                        <Link href={"/delivery"}>
                            <a><li>{t('shippingPolicy')}</li></a>
                        </Link>
                    </ul>
                </div> */}

                <div>
                    <ul className={styles.footer_ul}>
                        {/* <Link href={'/catalog'}>
                        <a ><li>{t('catalog')}</li></a>
                        
                        </Link> */}

                        {/* {
                            categories?.map((item, idx) => (
                                <Link key={item.id} href="/catalog/[id]" as={`/catalog/${item.id}`}>
                                    <a>
                                        <li>{item.name}</li>
                                    </a>
                                </Link>
                            ))
                        } */}
                    </ul>
                </div>
            </div>

            <div className={"container " + styles.footer_bottom}>
                {/* <div className={styles.footer_soc}>
                    <Image
                        src='/instagram.svg'
                        alt='instagram logo'
                        width={24}
                        height={24}
                    />
                    <Image
                        src='/whatsapp.svg'
                        alt='whatsapp logo'
                        width={24}
                        height={24}
                    />
                    <Image
                        src='/facebook.svg'
                        alt='facebook logo'
                        width={24}
                        height={24}
                    />
                    <Image
                        src='/telegram.svg'
                        alt='telegram logo'
                        width={24}
                        height={24}
                    />
                </div> */}

                <div className={styles.copyright}>
                    <Image
                        src={visa}
                        alt="Описание изображения"
                        width={80}
                        height={30}
                    />
                    <p>{t('LLC')}</p>
                    {/* <p>{t('address')}</p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
