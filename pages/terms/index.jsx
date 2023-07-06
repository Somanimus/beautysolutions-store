import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { getShares } from "../../redux/action/sharesAction";
import { BestCard } from "../../components/Best/Best";
import Link from "next/link";
import styles from './terms.module.css';

const Terms = () => {
    const { shares } = useSelector(state => state.shares)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShares())
    }, [dispatch])
    return (
        <Layout>
            <div className={`container ${styles.terms}`}>
                <hr />
                <h2>Условия использования</h2>
                <div>
                    <div>
                        <p>Agreement</p>
                        <p>
                            These terms of use form a distant agreement between you (the customer, user, client)
                            and us (the site,  beautysolutions.com, owned by Evolution Company LLC).
                            Your use of this site and every transaction made through  beautysolutions.com shall be
                            governed by this agreement as described hereinafter.
                        </p>
                    </div>
                    <div>
                        <p>Use of the site</p>
                        <p>You are provided with access to this site in accordance with the conditions described herein.</p>
                    </div>
                    <div>
                        <p>You warrant that:</p>
                        <p>– you agree not to impersonate any other person or entity when accessing and using  beautysolutions.com</p>
                    </div>
                    <div>
                        <p>We reserve the right to:</p>
                        <p>
                            – modify or withdraw, temporarily or permanently, this site (or any part thereof) with or without notice to you and you confirm that we shall not be liable to you or any third party for any modification to or withdrawal of the site; and/or;
                            – change the conditions from time to time without prior notice, and your continued use of this site (or any part thereof) following such change shall be deemed to be your acceptance of such change. If you do not agree to any change to the terms then you should immediately stop using the site.
                        </p>
                    </div>
                    <div>
                        <p>Order placement and acceptance</p>
                        <p>
                            The order acknowledgement email and order number are not an order acceptance from us.
                            Acceptance of your order and the completion of the contract between you and us will take
                            place on payment for the order unless we have notified you that we do not accept your order
                            or you have cancelled it yourself. To pay for your order you can use major credit, debit cards such
                            as Visa and MasterCard. At the checkout, you can also apply your 10% discretion discount that can
                            be used for any product available on our site. Once you paid for the order it is considered to
                            be accepted and will go for despatch.
                        </p>
                    </div>
                    <div>
                        <p>Availability and prices</p>
                        <p>
                            Goods represented on  beautysolutions.com are subject to availability.
                            Our acceptance of your offer to purchase our products is subject to their availability.
                            Our acknowledgement of your order via email is not a guarantee of delivery.
                            If we are unable to deliver the goods which you have offered to purchase we will let you know as quickly as possible.
                        </p>
                    </div>
                    <div>
                        <p>
                            Goods represented on  beautysolutions.com are subject to availability.
                            Our acceptance of your offer to purchase our products is subject to their availability.
                            Our acknowledgement of your order via email is not a guarantee of delivery.
                            If we are unable to deliver the goods which you have offered to purchase we will let you know as quickly as possible.
                        </p>
                    </div>
                    <div>
                        <p>Product description and information</p>
                        <p>
                            Although we take reasonable care to ensure that all images,
                            descriptions and other product details appearing on  beautysolutions.com are correct by
                            all means, the information on this site may not be accurate at the moment you place an order.
                            For example, the colours and/or appearance of our products may vary slightly from the way
                            they appear on the screen and we cannot guarantee that your monitor screen will accurately reflect
                            the colour of the product on delivery.
                        </p>
                    </div>
                    <div>
                        <p>Order reshipment and return</p>
                        <p>
                            If the product you ordered arrives damaged or defective,
                            please contact our customer support by email or phone.
                            Once we receive your request, we will ship a new product at our expense
                            to the same or a new (if such provided) delivery address.
                        </p>
                    </div>
                    <div>
                        <p>
                            If you wish to return the product, you can do so within 14 days after receiving your order.
                            Please notify our customer support about your decision and we will give you all the necessary
                            information on how to proceed with the product return. Note, the product must be returned in original packaging.
                        </p>
                    </div>
                    <div>
                        <p>Refund policy</p>
                        <p>
                            We offer a full refund for any purchase made through  beautysolutions.com.
                            Please let us know if you are not satisfied with the product that you
                            purchased from us and wish to return it. You are eligible for a full refund
                            within 14 days after receiving your order. The refund will cover the price of
                            the product itself and the shipping cost. Please note, it may take up to
                            14 business days for the refund to get processed and appear on your bank account.
                        </p>
                    </div>
                    <div>
                        <p>
                            If you have any additional questions about the refund procedure or would like to request a refund, contact our customer support.
                        </p>
                    </div>
                    <div>
                        <p>Customer support</p>
                        <p>
                            If you have any questions or concerns then please feel free to call or email us.
                            We are always here and happy to help you any time, 24/7/365. We also accept
                            written correspondence at the following address: Kyrgyzstan, Bishkek, Abdrahmanova str,
                            170 bld. The satisfaction of our customers is our priority.
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
        </Layout>
    )
}

export default Terms;