import { FC } from "react";
import classes from "../about/page.module.scss";

const AboutPage: FC = (): JSX.Element => {
    return (
        <div className={classes["container"]}>
            <h1 className={classes["aboutUs"]}>ՄԵՐ ՄԱՍԻՆ</h1>
            <p>
                Բարև, ես MyBonny֊ին եմ, ես Ձեզ կներկայացնեմ իմ պատրաստած գեղեցիկ, էսթետիկ, մատչելի և
                որակյալ բոքսերը, որոնք շատ կարճ ժամանակահատվածում մեծ ծավալ և հայտնիություն ձեռք
                բերեցին համացանցում։ Այժմ մենք ունենք նաև կայքէջ, որտեղ կգտնեք Ձեզ հուզող բոլոր
                հարցերի պատասխանները։ Մեզ մոտ կա բոքսերի լայն տեսականի, օրինակ` Շոկոլադապատ ելակներ,
                կոնֆետներով կոմպոզիցիա, ծաղկային բոքսեր, քաղցր բոքսեր, անվանական բոքսեր։ Ուզում եմ
                տեղեկացնել նաև՝ առկա տեսականուց բացի կարող եք պատվիրել Ձեր իսկ նախնտրած դիզայնով և
                կոմպոզիցիայով բոքսեր։ <br />
                Մենք ունենք առաքում ՀՀ ողջ տարածքում; <br />
                Կսպասենք բոլորիդ` Սիրով MyBonny:
            </p>
        </div>
    );
};

export default AboutPage;
