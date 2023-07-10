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
                            Мы серьезно относимся к конфиденциальности вашей информации, и мы
                            просим вас внимательно прочитать данное уведомление о конфиденциальности, поскольку оно содержит
                            важную информацию об использовании персональных данных, которые вы предоставляете
                            нам. Для уточнения, персональные данные представляют собой любую информацию
                            связанное с физическим лицом, которое может быть использовано для прямого или косвенного
                            идентифицирования человека. Это может быть имя, адрес электронной почты, номер телефона,
                            платежная информация и т.д.
                        </p>
                    </div>
                    <div>
                        <p>Информация, которую мы собираем и используем</p>
                        <p>Мы собираем и обрабатываем персональные данные, которые вы нам предоставляете, для следующих целей:</p>
                        <p>– для улучшения пользовательского опыта при использовании Beauty Solution;</p>
                        <p>— для оказания услуг по договору между вами и нами;</p>
                        <p>– соблюдать договорные обязательства;</p>
                        <p>– подтвердить свою личность;</p>
                        <p>– управлять платежными операциями;</p>
                        <p>- отгружать заказы и т.д.</p>
                    </div>
                    <div>
                        <p>
                            Чтобы наш сайт работал должным образом, мы можем собирать информацию
                            о частях сайта, которые вы используете, и о том, как вы его используете.
                            Такая информация называется «куки». Куки маленькие
                            текстовые файлы, которые веб-сайт отправляет в ваш веб-браузер
                            (например, Google Chrome, Safari, Firefox) и которые сохранены на вашем
                            устройство при посещении сайта. Файлы cookie используются для ускорения
                            и вам будет проще делать покупки на конкретном сайте, поскольку они собирают и
                            запоминать свои действия и предпочтения (например, язык).
                        </p>
                    </div>
                    <div>
                        <p>
                            Файлы cookie не хранят вашу личную информацию, мы их используем
                            исключительно для того, чтобы предоставить вам лучший возможный опыт просмотра и покупок.
                            Вы всегда можете контролировать или отключать файлы cookie, перейдя в «Настройки» в
                            ваш браузер. Обратите внимание, что в зависимости от файлов cookie, которые вы решите
                            блокировать, некоторые функции или разделы simpletechmall.com могут работать некорректно.
                        </p>
                    </div>
                    <div>
                        <p>Информация, которой мы делимся</p>
                        <p>
                            Мы никогда не продаем информацию, которую нам предоставляют наши клиенты.
                            Однако мы можем передавать вашу информацию сторонним компаниям.
                            для выполнения заказа. К ним относятся платежные шлюзы и платежные
                            переработчики, компании, обеспечивающие отгрузку заказанного товара и т.д.
                            Мы также поделимся вашей информацией с официальными органами, если мы
                            обязаны это сделать по закону.
                        </p>
                    </div>
                    <div>
                        <p>Информационная безопасность</p>
                        <p>
                            Мы прилагаем все усилия, чтобы защитить наш сайт и любые
                            информация, которую мы храним от несанкционированного доступа или
                            несанкционированное изменение, раскрытие или уничтожение.
                            В частности:
                        </p>
                        <p>
                            – мы проверяем сбор, хранение и
                            методы обработки, включая меры физической безопасности,
                            для защиты от несанкционированного доступа к системам.
                        </p>
                        <p>
                            — мы ограничиваем доступ к личной информации контрагентам, сервисным
                            поставщики и агенты, которым необходимо знать эту информацию для обработки
                            это для нас, чтобы предоставить вам наши услуги.
                        </p>
                    </div>
                    <div>
                        <p>
                            Обратите внимание, хотя мы внедрили наши лучшие методы обеспечения безопасности,
                            передача информации через Интернет невозможна
                            гарантировано как 100% безопасный.
                        </p>
                    </div>
                    <div>
                        <p>
                            Изменения
                        </p>
                        <p>
                            Наше уведомление о конфиденциальности может время от времени меняться. Мы будем публиковать обновления на
                            любые изменения конфиденциальности на этой странице. Мы советуем вам просмотреть эту страницу
                            периодически быть в курсе таких изменений.
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
        </Layout>
    )
}

export default Privacy;