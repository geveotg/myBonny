"use client";
import { FC } from "react";
import classes from "../footer/footer.module.scss";
import { FaCcVisa, FaCcMastercard, FaSquareInstagram, FaTiktok } from "react-icons/fa6";
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
                <div className={classes["card_link"]}>
                    <div className={classes["cont_icons"]}>
                        <a href="#">
                            <FaCcVisa className={classes["card_icons"]} />
                        </a>
                        <a href="#">
                            <FaCcMastercard className={classes["card_icons"]} />
                        </a>
                    </div>
                    <div className={classes["cont_icons"]}>
                        <a href="#">
                            <SiAmericanexpress className={classes["card_icons"]} />
                        </a>
                        <a href="#">
                            <TfiCreditCard className={classes["card_icons"]} />
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className={classes["help-compony"]}>
                <h3>Օգնություն</h3>
                <a href="">Նվեր քարտեր</a>
            </div> */}
            <div className={classes["follow-compony"]}>
                <h3>Հետևեք մեզ</h3>
                <div className={classes["follow_link"]}>
                    <a href="https://www.facebook.com/profile.php?id=61556510824288&mibextid=ZbWKwL">
                        <SiFacebook className={classes["follow_icon"]} />
                    </a>
                    <a href="https://www.tiktok.com/@_mybonny_?_t=8k7bdEv5r5W&_r=1">
                        <FaSquareInstagram className={classes["follow_icon"]} />
                    </a>
                    <a href="https://www.tiktok.com/@_mybonny_?_t=8k7bdEv5r5W&_r=1">
                        <FaTiktok className={classes["follow_icon"]} />
                    </a>
                </div>
                <p className={classes["address"]}>ՀՀ, Երևան, Արշակունյաց 2</p>
                <p className={classes["phone_number"]}>Հեռ։ +374 55 65 63 66</p>
                <a href=""></a>
            </div>
        </div>
    );
};
export default Footer;
