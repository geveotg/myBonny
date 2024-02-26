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
            <div className={classes["close_menu"]} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <IoMdClose className={classes["close_menu_icon"]} />
                ) : (
                    <GiHamburgerMenu className={classes["close_menu_icon"]} />
                )}
            </div>

            <div className={`${classes["links_container"]} ${isOpen ? classes["open"] : ""}`}>
                <div className={classes["drop_dawn"]}>
                    <Link className={classes["nav-link"]} href={""}>
                        Բաժիններ
                    </Link>
                    <div className={classes["drop_dwn"]}>
                        <Link className={classes["drop_dwn_links"]} href={"/sweet_boxes"}>
                            Քաղցր բոքսեր
                        </Link>
                        <Link className={classes["drop_dwn_links"]} href={"/letterName"}>
                            Անվանական բոքսեր
                        </Link>
                        <Link className={classes["drop_dwn_links"]} href={"/flower_boxes"}>
                            Ծաղկային բոքսեր
                        </Link>
                        <Link className={classes["drop_dwn_links"]} href={"/starwberries"}>
                            Շոկոլադապատ ելակներ
                        </Link>
                    </div>
                </div>
                <Link className={classes["nav-link"]} href={"/"}>
                    <Image
                        id={classes["app_logo"]}
                        className={classes["app_log"]}
                        width={300}
                        height={300}
                        src={"/img/logo2.png"}
                        alt=""
                    />
                </Link>

                <Link className={classes["nav-link"]} href={"/about"}>
                    Մեր Մասին
                </Link>
            </div>
        </div>
    );
};

export default Header;
