import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action/productsAction";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const {t} = useTranslation()

    const { searchValue, productsSearch } = useSelector(
        (state) => state.products
    );
    const [state, setState] = useState("");
    const dispatch = useDispatch();
    const onChangeValue = (e) => {
        setState(e.target.value);
    };
    useEffect(() => {
        dispatch(getProducts(false, false, false, state.replace(/ /gi, "+")));
    }, [state, dispatch]);
    const clickSearch = () => {
        dispatch(getProducts(false, false, false, state.replace(/ /gi, "+")));
    };
    
    return (
        <div className="container">
            <section className={styles.hero}>
                <div className={styles.hero_left}>
                    <h1 className={styles.hero_h1}>{t('itemsForBeauty')}</h1>
                    <div className={styles.input_wrapper}>
                        <label className={styles.hero_input}>
                            <input
                                type="text"
                                onChange={onChangeValue}
                            />
                            <svg
                                fill="#000000"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24px"
                                height="24px"
                            >
                                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
                            </svg>
                        </label>
                        <div className={styles.hero_btn} onClick={clickSearch}>
                            {t('find')}
                        </div>
                        {state ? (
                            <div className={styles.modalInput}>
                                {productsSearch?.results?.length ? (
                                    productsSearch?.results?.map(
                                        (item, idx) => {
                                            return (
                                                <Link
                                                    href="/[id]"
                                                    as={`/${item.id}`}
                                                    key={item.id}
                                                >
                                                    <a>
                                                        <div key={item.id}>
                                                            <h4>{item.name}</h4>
                                                        </div>
                                                    </a>
                                                </Link>
                                            );
                                        }
                                    )
                                ) : (
                                    <div>{t('noMatchesFound')}</div>
                                )}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>

                <div className={styles.hero_right}>
                    <Image src={'/cosmetics.png'} width={1400} height={700} alt={'hello'} />
               </div>
            </section>
        </div>
    );
};

export default Hero;
