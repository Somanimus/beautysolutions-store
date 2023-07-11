import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from "../../components/Layout/Layout";
import { getGoodCredit } from '../../redux/action/goodCreaditAction';
import { BestCard } from '../../components/Best/Best';
import * as styles from "./goodCredit.module.css"
import { useTranslation } from 'react-i18next';

const GoodCredit = () => {
    const {goodCredit} = useSelector(state => state.goodCredit)
    const dispatch = useDispatch()
    console.log(goodCredit)
    useEffect(() => {
        dispatch(getGoodCredit())
    }, [dispatch])

    const {t} = useTranslation()

    return (
        <Layout>
            <div className='container'>
                <h2>{t('itemsInCredit')}</h2>
                <div className={styles.best_card_wrapper}>
                    {
                        goodCredit?.results ? goodCredit?.results?.map((item, idx) => {
                            return (
                                <div className={styles.card_link} key={idx}>
                                    <BestCard new_is={item ? item.is_new : false} content={item} />
                                </div>
                            )
                        }) : t('noItemsInCredit')
                    }
                </div>
            </div>
        </Layout>
    );
};

export default GoodCredit;