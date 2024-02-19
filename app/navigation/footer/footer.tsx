"use client";
import { FC } from "react";
import classes from "../footer/footer.module.scss";
import {
    FaCcVisa,
    FaCcMastercard,
    FaSquareInstagram,
    FaTiktok,
} from "react-icons/fa6";
import { SiAmericanexpress, SiFacebook } from "react-icons/si";
import { TfiCreditCard } from "react-icons/tfi";

const Footer: FC = (): JSX.Element => {
    return (
        <div className={classes["container"]}>
            {/* <div className={classes["about-compony"]}>
                <h3>Ընկերության մասին</h3>
                <a href="">Մեր մասին</a>
                <a href="">Թիմ</a>
                <a href="">Բլոգ</a>
                <a href="">Կորպորատիվ առաջարկ</a>
                <a href="">Միացիր մեզ</a>
            </div> */}
            <div className={classes["payment-compony"]}>
                <h3>Առաքում և վաճառք</h3>
                <a href="">Առաքման արժեքները</a>
                <p>
                    <FaCcVisa /> <FaCcMastercard /> <SiAmericanexpress />{" "}
                    <TfiCreditCard />
                </p>
            </div>
            <div className={classes["help-compony"]}>
                <h3>Օգնություն</h3>
                <a href="">Նվեր քարտեր</a>
            </div>
            <div className={classes["follow-compony"]}>
                <h3>Հետևեք մեզ</h3>
                <p>
                    <a href="">
                        <SiFacebook className={classes["link_icon"]} />
                    </a>
                    <a
                        target={"_blank"}
                        href={"#"}
                        onClick={() => {
                            console.log(15);
                        }}
                    >
                        <FaSquareInstagram className={classes["link_icon"]} />
                    </a>
                    <a href="">
                        <FaTiktok className={classes["link_icon"]} />
                    </a>
                </p>
                <p>ՀՀ, Երևան, Արշակունյաց 2</p>
                <p>Հեռ։ +374 55 65 63 66</p>
                <a href=""> </a>
            </div>
        </div>
    );
};
export default Footer;
