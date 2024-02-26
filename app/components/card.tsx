import { FC } from "react";
import classes from "./card.module.scss";
import { FaStar, FaStarHalfAlt, FaShareAlt } from "react-icons/fa";
import { TbNumber } from "react-icons/tb";

interface Props {
    id: string;
    title: string;
    price: number;
    icon: string;
}

const Card: FC<Props> = ({ id, title, price, icon }) => {
    return (
        <div className={classes["row"]}>
            <div className={classes["col-md-4"]}>
                <div className={classes["product"]}>
                    <div className={classes["image"]}>
                        <img src={icon} alt="" />
                    </div>

                    <div className={classes["info"]}>
                        <h3>
                            <TbNumber className={classes["id_icon"]} />
                            {id}
                        </h3>
                        <span className={classes["price"]}>{price}֏</span>
                        <ul className={classes["rating"]}>
                            <li>
                                <FaStar />
                            </li>
                            <li>
                                <FaStar />
                            </li>
                            <li>
                                <FaStar />
                            </li>
                            <li>
                                <FaStar />
                            </li>
                            <li>
                                <FaStarHalfAlt />
                            </li>
                        </ul>
                        <div className={classes["info-price"]}>
                            <button className={classes["add-to-cart"]}>{title}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
