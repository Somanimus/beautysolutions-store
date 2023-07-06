import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { getShares } from "../../redux/action/sharesAction";
import { BestCard } from "../../components/Best/Best";
import Link from "next/link";

const Terms = () => {
    const {shares} = useSelector(state => state.shares)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShares())
    }, [dispatch])
    return (
        <Layout>
            <div className='container'>
                <h2>Условия использования</h2>
                <div>
                    <Link href='/'>Вернуться на главную</Link>
                </div>
            </div>
        </Layout>
    )
}

export default Terms;