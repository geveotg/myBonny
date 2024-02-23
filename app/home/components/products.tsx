import { FC } from "react";
import classes from "../style/products.module.scss";
import { products } from "./data";
import { SlBasket } from "react-icons/sl";
const Products: FC = () => {
    const OrderList = products.map(
        ({ title, description, price, icon, id }, i) => {
            return (
                <div key={i} className={classes["pading_div"]}>
                    <div className={classes["order-card"]}>
                        <img className={classes["img"]} src={icon} alt="img" />
                        <div className={classes["order-container"]}>
                            <div className={classes["order-info"]}>
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <p>{id}</p>
                            </div>

                            <div className={classes["order-text"]}>
                                <h1>{price}AMD</h1>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    );
    return (
        <div className={classes["container"]}>
            <div className={classes["container-text"]}>ԱՌԿԱ ՏԵՍԱԿԱՆԻ</div>
            <div className={classes["order-list"]}>{OrderList}</div>
        </div>
    );
};

export default Products;
