import React, { useEffect, useState } from "react";
import styles from "./detail.module.css";
import Slider from "react-slick";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, basketAction } from "../../redux/action/basketAction";
import { useTranslation } from "react-i18next";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " next-button-slick"}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " prev-button-slick"}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        />
    );
}

const ProductsDetail = ({ productsDetail }) => {
    const {t} = useTranslation()

    const { basket } = useSelector((state) => state.basket);
    const dispatch = useDispatch();

    function onClickButton(e) {
        e.preventDefault();
        addBasket(productsDetail.id);
        dispatch(basketAction());
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="container" style={{'marginTop' : '6em', 'marginBottom' : '4em'}}>
            <div className={styles.content}>
                <div className={styles.slider}>
                    <Slider {...settings}>


                            <div>
                                      <Image
                                        loader={() => '/placeholder-image.png'}
                                        src={productsDetail.images? productsDetail.images[0].image: '/placeholder-image.png'}
                                        placeholder="/placeholder-image.png"
                                        objectFit={"contain"}
                                        alt=""
                                        width={600}
                                        height={600}
                                        unoptimized
                                    />
                           </div>
                    </Slider>
                </div>
                <div>
                    <div className={styles.name}>
                        <h2>{productsDetail.name}</h2>

                        {productsDetail.sale && (
                            <div className={styles.sale}>
                                <div>{productsDetail.discount}%</div>
                            </div>
                        )}
                    </div>

                   <div style={{'marginBottom' : '1.5em'}}><strong>{t('info')}:</strong> {productsDetail.description}</div>
                    <div className={styles.btn_card_price}>
                        <div className={styles.price}>
                            <strong>{t('price')}:</strong>{" "}
                            <span
                                className={
                                    productsDetail.sale ? styles.dis_price : ""
                                }
                            >
                                {productsDetail.price &&
                                    productsDetail.price.replace(
                                        /\..*/,
                                        ""
                                    )}{" "}
                                $
                            </span>{" "}
                            {productsDetail.sale && (
                                <span>{productsDetail.discount_price} $</span>
                            )}
                        </div>
                        <div
                            className={styles.best_card_btn}
                            onClick={onClickButton}
                        >
                            {basket.indexOf(productsDetail.id) !== -1
                                ? t('removeFromBasket')
                                : t('inBasket')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetail;
