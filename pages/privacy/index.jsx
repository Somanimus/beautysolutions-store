import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { getShares } from "../../redux/action/sharesAction";
import { BestCard } from "../../components/Best/Best";
import Link from "next/link";
import styles from './privacy.module.css';

const Privacy = () => {
    const { shares } = useSelector(state => state.shares)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShares())
    }, [dispatch])
    return (
        <Layout>
            <div className={`container ${styles.privacy}`}>
                <hr />
                <h2>Конфиденциальность</h2>
                <div>
                    <div>
                        <p>
                            We take the privacy of your information seriously and we
                            ask that you read this Privacy notice carefully as it contains
                            important information on the use of personal data that you provide
                            to us. For clarification, personal data constitutes any information
                            related to an individual that can be used to directly or indirectly
                            identify the person. It can be a name, an email address, a telephone number,
                            payment information, etc.
                        </p>
                    </div>
                    <div>
                        <p>Information we collect and use</p>
                        <p>We collect and process personal data you provide to us for the following purposes:</p>
                        <p>– to improve the user experience when using simplytechmall.com;</p>
                        <p>– to provide services under the agreement between you and us;</p>
                        <p>– to comply with contractual obligations;</p>
                        <p>– to confirm your identity;</p>
                        <p>– to manage payment transactions;</p>
                        <p>– to ship orders, etc.</p>
                    </div>
                    <div>
                        <p>
                            To make our site work properly, we may collect information
                            about the parts of the site that you use and how you use it.
                            This kind of information is called “cookies”. Cookies are small
                            text files that a website sends to your web browser
                            (e.g., Google Chrome, Safari, Firefox) and which are saved on your
                            device when you visit a site. Cookies are used to make it quicker
                            and easier for you to shop on a particular site as they collect and
                            remember your actions and preferences (e.g., language).
                        </p>
                    </div>
                    <div>
                        <p>
                            Cookies do not store any of your personal information, we use them
                            solely to provide you with the best browsing and shopping experience possible.
                            You can always control or disable cookies by going to Settings in
                            your browser. Please note, depending on the cookies you decide to
                            block, some functionalities or areas of simplytechmall.com may not work properly.
                        </p>
                    </div>
                    <div>
                        <p>Information we share</p>
                        <p>
                            We never sell the information our customers provide to us.
                            However, we may share your information with third-party companies
                            for order fulfilment. They include payment gateways and payment
                            processors, companies that provide shipment of ordered goods, etc.
                            We will also share your information with official authorities if we
                            are required to do so by the law.
                        </p>
                    </div>
                    <div>
                        <p>Information security</p>
                        <p>
                            We work hard to protect our site and any
                            information that we hold from unauthorized access or
                            unauthorized alteration, disclosure or destruction.
                            In particular:
                        </p>
                        <p>
                            – we review our information collection, storage and
                            processing practices, including physical security measures,
                            to guard against unauthorized access to systems.
                        </p>
                        <p>
                            – we restrict access to personal information to contractors, service
                            providers and agents who need to know that information to process
                            it for us to provide our services to you.
                        </p>
                    </div>
                    <div>
                        <p>
                            Please note, though we have implemented our best security practices,
                            no information transmission over the means of the Internet can be
                            guaranteed as 100% safe.
                        </p>
                    </div>
                    <div>
                        <p>
                            Changes
                        </p>
                        <p>
                            Our Privacy notice may change from time to time. We will post updates on
                            any privacy changes on this page. We advise that you review this page
                            periodically to be aware of such changes.
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
        </Layout>
    )
}

export default Privacy;