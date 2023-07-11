import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { getShares } from "../../redux/action/sharesAction";
import { BestCard } from "../../components/Best/Best";
import Link from "next/link";
import styles from './terms.module.css';
import { useTranslation } from "react-i18next";

const Terms = () => {
    const { shares } = useSelector(state => state.shares)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShares())
    }, [dispatch])

    const {t} = useTranslation()
    return (
        <Layout>
            <div className={`container ${styles.terms}`}>
                <hr />
                <h2>{t('termsOfUse')}</h2>
                <div>
                    <div>
                        <p>{t('terms1')}</p>
                        <p>{t('terms2')}</p>
                    </div>
                    <div>
                        <p>{t('terms3')}</p>
                        <p>{t('terms4')}</p>
                    </div>
                    <div>
                        <p>{t('terms5')}</p>
                        <p>{t('terms6')}</p>
                    </div>
                    <div>
                        <p>{t('terms7')}</p>
                        <p>{t('terms8')}</p>
                    </div>
                    <div>
                        <p>{t('terms9')}</p>
                        <p>{t('terms10')}</p>
                    </div>
                    <div>
                        <p>{t('terms11')}</p>
                        <p>{t('terms12')}</p>
                    </div>
                    <div>
                        <p>{t('terms13')}</p>
                        <p>{t('terms14')}</p>
                    </div>
                    <div>
                        <p>{t('terms15')}</p>
                        <p>{t('terms16')}</p>
                    </div>
                    <div>
                        <p>{t('terms17')}</p>
                    </div>
                    <div>
                        <p>{t('terms18')}</p>
                        <p>{t('terms19')}</p>
                    </div>
                    <div>
                        <p>{t('terms20')}</p>
                    </div>
                    <div>
                        <p>{t('terms21')}</p>
                        <p>{t('terms22')}</p>
                    </div>
                    <hr />
                </div>
            </div>
        </Layout>
    )
}

export default Terms;