import React from "react";
import styles from "./New.module.css";

import Image from "next/image";
import LoadMore from "../LoadMore/LoadMore";
import { productsNewCount } from "../../redux/action/productsAction";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const NewCard = ({ newContent }) => {
  const {t} = useTranslation()

  return (
    <div className={styles.new_card}>
      <div className={styles.new_card_left}>
        <div>
          <span className={styles.new_card_name}>{newContent.name}</span>
          <span className={styles.new_card_descr}>
            {newContent.description}
          </span>
        </div>
        <Link href={"/[id]"} as={`/${newContent.id}`}>
          <a>
            <div className={styles.new_card_btn}>{t('more')}</div>
          </a>
        </Link>
      </div>
      <div className={styles.new_card_right}>
        <Image
          src={newContent.images == false ? '/placeholder-image.png' : newContent.images[0].image}
          loader={() => newContent.image}
          alt="sofa img"
          width={470}
          height={350}
          objectFit={"contain"}
          unoptimized
        />
      </div>
    </div>
  );
};

const New = ({ productsNew }) => {
  const {t} = useTranslation()
  const productsNewCountNew = useSelector(
    (state) => state.products.productsNewCount
  );
  const dispatch = useDispatch();

  const limitIncrement = () => {
    dispatch(productsNewCount(4));
  };
  return (
    <div className="gray_bg">
      <div className="container">
        <h2 className="text-center">{t('news')}</h2>
        <div className={styles.new_card_wrapper}>
          {productsNew.results
            ? productsNew.results.map((item, idx) => (
                <NewCard newContent={item} key={idx} />
              ))
            : t('noGoodsInCategory')}
        </div>
        {productsNew.count > productsNewCountNew ? (
          <LoadMore click={() => limitIncrement()} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default New;
