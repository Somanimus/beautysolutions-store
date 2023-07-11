import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { getShares } from "../../redux/action/sharesAction";
import { BestCard } from "../../components/Best/Best";
import Link from "next/link";
import styles from './privacy.module.css';
import { useTranslation } from "react-i18next";

const Privacy = () => {
    const { shares } = useSelector(state => state.shares)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShares())
    }, [dispatch])

    const {t} = useTranslation()
    return (
        <Layout>
            <div className={`container ${styles.privacy}`}>
                <hr />
                <h2>{t('confidentiality')}</h2>
                <div>
                    <div>
                        <p>{t('privacy1')}</p>
                    </div>
                    <div>
                        <p>{t('privacy2')}</p>
                        <p>{t('privacy3')}</p>
                        <p>{t('privacy4')}</p>
                        <p>{t('privacy5')}</p>
                        <p>{t('privacy6')}</p>
                        <p>{t('privacy7')}</p>
                        <p>{t('privacy8')}</p>
                        <p>{t('privacy9')}</p>
                    </div>
                    <div>
                        <p>{t('privacy10')}</p>
                    </div>
                    <div>
                        <p>{t('privacy11')}</p>
                    </div>
                    <div>
                        <p>{t('privacy12')}</p>
                        <p>{t('privacy13')}</p>
                    </div>
                    <div>
                        <p>{t('privacy14')}</p>
                        <p>{t('privacy15')}</p>
                        <p>{t('privacy16')}</p>
                        <p>{t('privacy17')}</p>
                    </div>
                    <div>
                        <p>{t('privacy18')}</p>
                    </div>
                    <div>
                        <p>
                        {t('privacy19')}
                        </p>
                        <p>{t('privacy20')}</p>
                    </div>
                    <hr />
                </div>
            </div>
        </Layout>
    )
}

export default Privacy;