import { FC } from "react";
import classes from "./page.module.scss";
import Card from "../components/card";
import { flowers } from "./components/data";

const FlowersBoxes: FC = () => {
    const productList = flowers.map((el, i) => {
        return <Card key={i} icon={el.icon} id={el.id} price={el.price} title={el.title} />;
    });

    return (
        <div className={classes["global"]}>
            <div className={classes["name"]}>
                <h1>Ծաղկային բոքսեր</h1>
            </div>

            <div className={classes["container"]}>{productList}</div>
        </div>
    );
};

export default FlowersBoxes;
