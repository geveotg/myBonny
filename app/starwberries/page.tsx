import { FC } from "react";
import classes from "./page.module.scss";
import Card from "../components/card";
import { starwberriesData } from "./components/data";

const Starwberries: FC = () => {
    const productList = starwberriesData.map((el, i) => {
        return <Card key={i} icon={el.icon} id={el.id} price={el.price} title={el.title} />;
    });

    return (
        <div className={classes["global"]}>
            <div className={classes["name"]}>
                <h1>Շոկոլադապատ ելակներ</h1>
            </div>

            <div className={classes["container"]}>{productList}</div>
        </div>
    );
};

export default Starwberries;
