import { FC } from "react";
import classes from "../style/products.module.scss";
import { Image } from "antd";
import { products } from "./data";
import { SlBasket } from "react-icons/sl";
import { TbNumber } from "react-icons/tb";
import { FaStar, FaStarHalfAlt, FaShareAlt } from "react-icons/fa";

const Products: FC = () => {
    const OrderList = products.map(({ title, description, price, icon, id }, i) => {
        return (
            <div key={id} className={classes["row"]}>
                <div className={classes["image"]}>
                    <Image src={icon} alt="img" />
                </div>
                <div className={classes["col-md-4"]}>
                    <div className={classes["product"]}>
                        <div className={classes["info"]}>
                            <div className={classes["product_about"]}>
                                <div className={classes["reating_share"]}>
                                    {/* <FaShareAlt className={classes["share_icon"]} /> */}
                                </div>
                                <h3>
                                    <TbNumber  className={classes["id_icon"]} />
                                    {id}
                                </h3>
                                <span className={classes["price"]}>{price}֏</span>
                            </div>
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
    });
    return (
        <div className={classes["container"]}>
            <div className={classes["name"]}>
                <h1>ԱՌԿԱ ՏԵՍԱԿԱՆԻ</h1>
            </div>
            <div className={classes["order-list"]}>{OrderList}</div>
        </div>
    );
};

export default Products;
