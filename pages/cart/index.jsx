import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { BestCard } from "../../components/Best/Best";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../https";
import { getProducts } from "../../redux/action/productsAction";
import { basketAction, getLocalStorage } from "../../redux/action/basketAction";
import styles from "./card.module.css";
import { useTranslation } from "react-i18next";

const f = {
    "email": "lev201611@gmail.com",
    "addres": "logvinenko 55A",
    "full_name": "lev Boiko",
    "phone": "0559595139",
    "ordered": false,
    "products": [{"prod_id": 1, "amount": 10}, {"prod_id": 2, "amount": 3}]
}

const Card = () => {
    const [amount, setAmount] = useState(1)
    const [email, setemail] = useState('')
    const [phone_number, setphone]  = useState('')
    const [username, setusername] = useState('')
    const [adress, setadress] = useState('')
    const { products } = useSelector((state) => state.products);
    const { basket } = useSelector((state) => state.basket);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(false, false, 120));
        dispatch(basketAction());
    }, [dispatch]);

    // console.log(products.results.filter((item, idx) => basket.indexOf(item.id) !== -1).map((item) => item.id))
             

    const formChange =async (e) => {
        e.preventDefault()
        console.log('email ' + email)
        console.log('phone' + phone_number)
        console.log('adress' + adress)
        console.log('name ' + username)
        await axios.post(`${API_URL}/order/`, {
            full_name: username,
            email, 
            addres: adress,
            phone: phone_number,
            ordered: true,
            products: products.results.filter((item, idx) => basket.indexOf(item.id) !== -1).map((item) => `${item.id}`)
        }).then(res => console.log(res)).catch(err => console.log(err))
    } 

    const {t} = useTranslation()

    return (
        <Layout title="Корзина">
            <div className={styles.basket + " container"}>
                {basket.length > 0? (
                    products?.results
                        ?.filter((item, idx) => basket.indexOf(item.id) !== -1)
                        .map((item, idx) => {
                            return (
                                <div key={item.id}>
                                    <BestCard content={item} new_is={false} count={amount} setCount={setAmount} />
                                </div>
                            );
                        })
                ) : (
                    <h2>{t('nothingInBasket')}</h2>
                )}
            </div>
            <br />
            <br />
            <hr />
            <div className={styles.cart + " container"}>
                <form onSubmit={formChange}>
                    <div>
                        <label>
                            <span>{t('name')} *</span>
                            <input type="text" value={username}  onChange={ e=> setusername(e.target.value)}required name="full_name" />
                        </label>
                        <label>
                            <span>Email *</span>
                            <input value={email} type="email" required name="email"  onChange={e => setemail(e.target.value)}/>
                        </label>
                        <label>
                            <span>{t('phone')} *</span>
                            <input
                                type="text"
                                required
                                placeholder="+996-XXX-XXX-XXX"
                                name="phone"
                                value={phone_number}
                                onChange={e=> setphone(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>{t('cardAdres')} *</span>
                            <input type="text" onChange={e=> setadress(e.target.value)} value={adress} required name="addres" />
                        </label>
                    </div>
                    <button type="submit">{t('order')}</button>
                </form>
            </div>
        </Layout>
    );
};

export default Card;
