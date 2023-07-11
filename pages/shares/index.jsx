import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { getShares } from "../../redux/action/sharesAction";
import { BestCard } from "../../components/Best/Best";
import * as styles from "./shares.module.css"
import { useTranslation } from "react-i18next";

const Shares = () => {
    const {shares} = useSelector(state => state.shares)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShares())
    }, [dispatch])

    const {t} = useTranslation()
    return (
        <Layout>
            <div className='container'>
                <h2>{t('stock')}</h2>
                <div className={styles.best_card_wrapper}>
                    {
                        shares?.results?.length ? shares?.results?.map((item, idx) => {
                            return (
                                <div className={styles.card_link} key={idx}>
                                    <BestCard new_is={item ? item.is_new : false} content={item} />
                                </div>
                            )
                        }) : t('noItems')
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Shares