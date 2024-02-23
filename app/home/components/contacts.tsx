import { FC } from "react";
import classes from "../style/contacts.module.scss";
import { FaTelegram } from "react-icons/fa6";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
const Contacts: FC = () => {
    return (
        <div className={classes["contacts_container"]}>
            <div className={classes["icons_container"]}>
                <a
                    className={classes["contact_link"]}
                    href="https://web.telegram.org/a/#6911961767"
                >
                    <FaTelegram className={classes["telegram"]} />
                </a>

                <a
                    className={classes["contact_link"]}
                    href="https://web.telegram.org/a/#6911961767"
                >
                    <IoLogoWhatsapp className={classes["whatsapp"]} />
                </a>
            </div>
            <div className={classes["tel_container"]}>
                {/* <a
                    className={classes["telegram_link"]}
                    href="https://web.telegram.org/a/#6911961767"
                >
                    <FaTelegram className={classes["telegram_icon"]} />
                    +347 55 65-63-66
                </a> */}
                <a className={classes["contact_link"]} href="tel:+37455656366">
                    <BsTelephoneForwardFill className={classes["tel_icon"]} />
                    +374 55 65-63-66
                </a>
            </div>
        </div>
    );
};

export default Contacts;
