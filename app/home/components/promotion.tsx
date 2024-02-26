import { FC } from "react";
import classes from "../style/promotion.module.scss";
import { promotion_data } from "./data";
import Static from "./satatic";

const Promotion: FC = () => {
    const promotionList = promotion_data.map(({ title, description, price, icon, sail }, i) => {
        return (
            <div key={i} className={classes["promotion_card"]}>
                <img src={icon} alt="img" />
                <div className={classes["promotion_about"]}>
                    <div className={classes["promotion_text"]}>
                        <h1>
                            {sail} {price}%
                        </h1>
                        {/* <p>{price}%</p> */}
                    </div>
                    <div className={classes["promotion_info"]}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    {/* <Static /> */}
                    <p className={classes["promotion_description"]}>
                        Lorem ipsum dolor sit amet consectetur
                    </p>
                </div>
            </div>
        );
    });
    return <div className={classes["container"]}>{promotionList}</div>;
};

export default Promotion;
