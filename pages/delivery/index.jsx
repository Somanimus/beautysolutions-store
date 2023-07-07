import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { getShares } from "../../redux/action/sharesAction";
import { BestCard } from "../../components/Best/Best";
import Link from "next/link";
import styles from './delivery.module.css';
import {countries} from './countiesArray';

const Delivery = () => {
    const { shares } = useSelector(state => state.shares)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShares())
    }, [dispatch])

    return (
        <Layout>
            <div className={`container ${styles.delivery}`}>
                <hr />
                <h2>Политика доставки</h2>
                <div>
                    <div>
                        <p>General information</p>
                        <p>
                            All orders are subject to product availability.
                            If an item is not in stock at the time you place your order, we
                            will notify you about it. Once your order is approved and paid for,
                            we will send you an email confirming the shipment of the
                            products together with tracking sources.
                        </p>
                    </div>
                    <div>
                        <p>Shipping costs</p>
                        <p>
                            Shipping costs are based on the weight of your order and the delivery type.
                            To find out how much your order will cost, simply add the items you would
                            like to purchase to your cart and proceed to the checkout page. Once at the
                            checkout screen, shipping charges will be displayed. Please note, customs duties
                            and taxes may be charged according to the country or state to which the item is shipped.
                            However, we cannot predict whether they will be applied
                            and do not include them in the total order cost at the checkout.
                        </p>
                    </div>
                    <div>
                        <p>Below you can find the types of order delivery we provide and their cost:</p>
                    </div>

                    <table>
                        <tr>
                            <th>Type</th>
                            <th>Cost</th>
                            <th>Delivery time</th>
                        </tr>
                        <tr>
                            <td>Regular</td>
                            <td>18.55 USD</td>
                            <td>Within 19-24 BD</td>
                        </tr>
                        <tr>
                            <td>Premium</td>
                            <td>27.99 USD</td>
                            <td>Within 8-14 BD</td>
                        </tr>
                    </table>

                    <div>
                        <p>*BD stands for “business days” – Monday through Friday, excluding weekends and public holidays.</p>
                    </div>
                    <div>
                        <p>International shipping</p>
                        <p>
                            We try to reach as many countries all over the world as
                            possible but there might be some exceptions due to different reasons.
                            Please check out the list of the countries we do ship to below.
                        </p>
                    </div>
                    {
                        countries.map((obj, i) =>
                            <div key={i}>
                                <p>{obj.title}</p>
                                <ul>
                                    {
                                        obj.cities.map((city, index) => <li key={index}>{city}</li>)
                                    }
                                </ul>
                            </div>)
                    }
                    <div>
                        <p>Delivery time</p>
                        <p>
                            Delivery times are estimates and start from the
                            date of shipping, rather than the date of order.
                            Delivery times are to be used as a guide only.
                        </p>
                    </div>
                    <div>
                        <p>
                            The date of delivery may vary due to carrier shipping practices, delivery location, method of delivery,
                            and the items ordered. Products may also be delivered in separate shipments.
                            Please note that unless there are exceptional circumstances, we make every effort to fulfil
                            your order within the delivery times stated above. Exceptional circumstances are events that
                            are outside of our control and that could not be foreseen or guarded against. They include but are not
                            limited to floods, hurricanes, fire, earthquakes, typhoons, explosions, war, strikes, or acts of
                            government that may prevent us from fulfilling its obligation.
                        </p>
                    </div>
                    <div>
                        <p>Damaged or defective items</p>
                        <p>
                            We understand that purchasing electronics can be a big investment
                            and we want to make your decision as easy as possible. Please be
                            assured that customer satisfaction is our top priority. We will work
                            diligently to resolve any issues with your order in accordance with the policy set forth below.
                        </p>
                    </div>
                    <div>
                        <p>
                            If you are not 100% satisfied with your purchase for any reason, please contact us immediately.
                            We will replace any damaged or defective item and send it to you again free of charge. If that
                            is not the case for you, we will issue a refund (including shipping cost) with the same means of
                            payment as used in your order. Refunds usually take 7 to 14 business days to process and appear
                            on your bank account. You can also return the item within 14 days of receiving your order.
                            Please contact our customer support for more details on the product return procedure.
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
        </Layout>
    )
}

export default Delivery;