import React, { useEffect, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { getShares } from "../../redux/action/sharesAction";
import { BestCard } from "../../components/Best/Best";
import Link from "next/link";
import styles from './delivery.module.css';
import { useTranslation } from "react-i18next";

const Delivery = () => {
    const { shares } = useSelector(state => state.shares)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShares())
    }, [dispatch])

    const countries = [
        {
            title: 'Afrika',
            cities: [
                ' – Congo, the Democratic Republic of the',
                ' – Egypt',
                ' – Eritrea',
                ' – Madagascar',
                ' – Reunion',
                ' – Saint Helena, Ascension and Tristan da Cunha',
                ' – Seychelles',
                ' – South Africa',
                ' – South Sudan',
                ' – Swaziland',
                ' – Tunisia'
            ]
        },
        {
            title: 'Asia',
            cities: [
                ' – Guam',
                ' – Hong Kong',
                ' – Japan',
                ' – Macao',
                ' – Malaysia',
                ' – Maldives',
                ' – Northern Mariana Islands',
                ' – Philippines',
                ' – Singapore',
                ' – South Korea',
                ' – Thailand',
                ' – Timor-Leste'
            ]
        },
        {
            title: 'Europe',
            cities: [
                ' – Aland Islands',
                ' – Albania',
                ' – Andorra',
                ' – Austria',
                ' – Belgium',
                ' – Bermuda',
                ' – Bosnia and Herzegovina',
                ' – British Indian Ocean Territory',
                ' – Bulgaria',
                ' – Cayman Islands',
                ' – Croatia',
                ' – Czech Republic',
                ' – Denmark',
                ' – Estonia',
                ' – Faroe Islands',
                ' – Finland',
                ' – France',
                ' – French Guiana',
                ' – French Polynesia',
                ' – French Southern Territories',
                ' – Germany',
                ' – Greece',
                ' – Greenland',
                ' – Guernsey',
                ' – Holy See',
                ' – Hungary',
                ' – Iceland',
                ' – Ireland',
                ' – Isle of Man',
                ' – Italy',
                ' – Jersey',
                ' – Liechtenstein',
                ' – Luxembourg',
                ' – Macedonia, the former Yugoslav Republic of',
                ' – Malta',
                ' – Mayotte',
                ' – Monaco',
                ' – Montenegro',
                ' – Netherlands',
                ' – Netherlands Antilles',
                ' – New Caledonia',
                ' – Norway',
                ' – Poland',
                ' – Portugal',
                ' – Romania',
                ' – Saint Martin (French part)',
                ' – San Marino',
                ' – Serbia',
                ' – Slovakia',
                ' – Slovenia',
                ' – Spain',
                ' – Svalbard and Jan Mayen',
                ' – Sweden',
                ' – Switzerland',
                ' – United Kingdom of Great Britain and Northern Ireland',
                ' – Virgin Islands, British'
            ]
        },
        {
            title: 'Middle East',
            cities: [
                ' – Cyprus',
                ' – Jordan',
                ' – Turkey',
                ' – United Arab Emirates'
            ]
        },
        {
            title: 'North America/Central America',
            cities: [
                ' – Canada',
                ' – Costa Rica',
                ' – Guadeloupe',
                ' – Martinique',
                ' – Mexico',
                ' – Panama',
                ' – Puerto Rico',
                ' – Saint Pierre and Miquelon',
                ' – United States Minor Outlying Islands',
                ' – United States of America',
                ' – Virgin Islands, U.S.'
            ]
        },
        {
            title: 'Oceania',
            cities: [
                ' – Australia',
                ' – Christmas Island',
                ' – Cocos (Keeling) Islands',
                ' – Cook Islands',
                ' – Fiji',
                ' – Heard Island and McDonald Islands',
                ' – Marshall Islands',
                ' – New Zealand',
                ' – Norfolk Island',
                ' – Solomon Islands'
            ]
        },
        {
            title: 'South America/the Caribbean',
            cities: [
                ' – Antigua and Barbuda',
                ' – Argentina',
                ' – Aruba',
                ' – Bahamas',
                ' – Bolivia, Plurinational State of',
                ' – Bonaire, Sint Eustatius and Saba',
                ' – Brazil',
                ' – Chile',
                ' – Colombia',
                ' – Cuba',
                ' – Curacao',
                ' – Dominican Republic',
                ' – Ecuador',
                ' – Falkland Islands (Malvinas)',
                ' – Guyana',
                ' – Haiti',
                ' – Paraguay',
                ' – Peru',
                ' – Saint Barthelemy',
                ' – Saint Kitts and Nevis',
                ' – Saint Lucia',
                ' – Saint Vincent and the Grenadines',
                ' – Sint Maarten (Dutch part)',
                ' – Suriname',
                ' – Turks and Caicos Islands',
                ' – Uruguay',
                ' – Venezuela, Bolivarian Republic of'
            ]
        }
    ]

    const {t} = useTranslation()

    return (
        <Layout>
            <div className={`container ${styles.delivery}`}>
                <hr />
                <h2>{t('shippingPolicy')}</h2>
                <div>
                    <div>
                        <p>{t('GeneralInformation')}</p>
                        <p>{t('delivery1')}</p>
                    </div>
                    <div>
                        <p>{t('delivery2')}</p>
                        <p>{t('delivery3')}</p>
                    </div>
                    <div>
                        <p>{t('delivery4')}</p>
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
                        <p>{t('delivery5')}</p>
                    </div>
                    <div>
                        <p>{t('delivery6')}</p>
                        <p>{t('delivery7')}</p>
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
                        <p>{t('delivery8')}</p>
                        <p>{t('delivery9')}</p>
                    </div>
                    <div>
                        <p>{t('delivery10')}</p>
                    </div>
                    <div>
                        <p>{t('delivery11')}</p>
                        <p>{t('delivery12')}</p>
                    </div>
                    <div>
                        <p>{t('delivery13')}</p>
                    </div>
                    <hr />
                </div>
            </div>
        </Layout>
    )
}

export default Delivery;