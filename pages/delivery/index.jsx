import React, { useEffect } from "react";
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
    const { t } = useTranslation();

    return (
        <Layout>
            <div className={`container ${styles.delivery}`}>
                <hr />
                <h2>Политика доставки</h2>
                <div>
                    <div>
                        <p>Общая информация</p>
                        <p>
                            Все заказы выполняются при наличии товара.
                            Если товара нет в наличии на момент размещения заказа, мы
                            уведомит вас об этом. После того, как ваш заказ будет одобрен и оплачен,
                            мы вышлем вам электронное письмо с подтверждением отправки
                            продукты вместе с отслеживанием источников.
                        </p>
                    </div>
                    <div>
                        <p>Стоимость доставки</p>
                        <p>
                            Стоимость доставки зависит от веса вашего заказа и типа доставки.
                            Чтобы узнать, сколько будет стоить ваш заказ, просто добавьте товары, которые вы хотели бы
                            в корзину и перейдите на страницу оформления заказа. Однажды в
                            экран оформления заказа, стоимость доставки будет отображаться. Обратите внимание, таможенные пошлины
                            и налоги могут взиматься в зависимости от страны или штата, в который отправляется товар.
                            Однако мы не можем предсказать, будут ли они применяться
                            и не включать их в общую стоимость заказа на кассе.
                        </p>
                    </div>
                    <div>
                        <p>Ниже вы можете ознакомиться с видами доставки заказов, которые мы осуществляем, и их стоимостью:</p>
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
                        <p>*BD означает «рабочие дни» — с понедельника по пятницу, кроме выходных и праздничных дней.</p>
                    </div>
                    <div>
                        <p>Международный доставка</p>
                        <p>
                            Мы стараемся охватить как можно больше стран мира,
                            но могут быть некоторые исключения по разным причинам.
                            Пожалуйста, ознакомьтесь со списком стран, в которые мы осуществляем доставку ниже.
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
                        <p>Срок поставки</p>
                        <p>
                            Сроки доставки ориентировочные и начинаются с
                            дата отгрузки, а не дата заказа.
                            Сроки доставки должны использоваться только в качестве ориентира.
                        </p>
                    </div>
                    <div>
                        <p>
                            Дата доставки может варьироваться в зависимости от практики доставки перевозчика, места доставки, способа доставки,
                            и заказанные товары. Товары также могут поставляться отдельными партиями.
                            Обратите внимание, что если нет исключительных обстоятельств, мы прилагаем все усилия, чтобы выполнить
                            Ваш заказ в сроки, указанные выше. Исключительные обстоятельства – это события, которые
                            находятся вне нашего контроля и не могут быть предвидены или защищены от них. Они включают, но не
                            ограничивается наводнениями, ураганами, пожарами, землетрясениями, тайфунами, взрывами, войнами, забастовками или актами
                            правительство, которое может помешать нам выполнить свои обязательства.
                        </p>
                    </div>
                    <div>
                        <p>Поврежденные или дефектные предметы</p>
                        <p>
                            Мы понимаем, что покупка электроники может быть большой инвестицией
                            и мы хотим сделать ваше решение как можно проще. Будьте
                            уверены, что удовлетворение потребностей клиентов является нашим главным приоритетом. Мы будем работать
                            усердно решать любые проблемы с вашим заказом в соответствии с политикой, изложенной ниже.
                        </p>
                    </div>
                    <div>
                        <p>
                            Если вы не на 100% удовлетворены своей покупкой по какой-либо причине, пожалуйста, немедленно свяжитесь с нами.
                            Мы бесплатно заменим любой поврежденный или дефектный товар и снова отправим его вам. Если это
                            это не ваш случай, мы вернем деньги (включая стоимость доставки) тем же способом
                            платеж, используемый в вашем заказе. Возврат средств обычно занимает от 7 до 14 рабочих дней для обработки и появления.
                            на вашем банковском счете. Вы также можете вернуть товар в течение 14 дней с момента получения заказа.
                            Пожалуйста, свяжитесь с нашей службой поддержки для получения более подробной информации о процедуре возврата продукта.
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
        </Layout>
    )
}

export default Delivery;