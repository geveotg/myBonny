"use client";

import { FC, useState } from "react";
import classes from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header: FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classes["container"]}>
            <div
                className={classes["close_menu"]}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <IoMdClose className={classes["close_menu_icon"]} />
                ) : (
                    <GiHamburgerMenu className={classes["close_menu_icon"]} />
                )}
            </div>

            <div
                className={`${classes["links_container"]} ${
                    isOpen ? classes["open"] : ""
                }`}
            >
                <Link className={classes["nav-link"]} href={"/"}>
                    home
                </Link>
                <Link className={classes["nav-link"]} href={"/"}>
                    home Link
                </Link>
                <Image
                    id={classes["app_logo"]}
                    className={classes["app_log"]}
                    width={300}
                    height={300}
                    src={"/img/logo2.png"}
                    alt=""
                />

                <Link className={classes["nav-link"]} href={"/"}>
                    home
                </Link>
                <Link className={classes["nav-link"]} href={"/"}>
                    home Link
                </Link>
            </div>

            {/* <div className={classes["contacts_container"]}>
                <BsFillTelephoneOutboundFill className={classes["telephone"]} />{" "}
                <span>(+374) 55 65-63-66</span>
            </div> */}
        </div>
    );
};

export default Header;
