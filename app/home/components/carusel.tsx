"use client";

import React from "react";
import { Carousel } from "antd";
import classes from "../style/carusel.module.scss";

const Carusel: React.FC = () => {
    const images = ["/img/slide_1.jpg", "/img/slide_2.jpg", "/img/slide_3.jpg", "/img/slide_4.jpg"];

    const imagesList = images.map((el, i) => {
        return (
            <div key={i} className={classes["slide_card"]}>
                <div className={classes["standartWide"]}>
                    <img className={classes["slide_image"]} src={el} alt="img" />
                </div>
            </div>
        );
    });

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return <Carousel afterChange={onChange}>{imagesList}</Carousel>;
};

export default Carusel;
