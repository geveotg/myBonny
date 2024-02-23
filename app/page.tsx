import Image from "next/image";
import styles from "./page.module.css";
import Carusel from "./home/components/carusel";
import Promotion from "./home/components/promotion";
import Products from "./home/components/products";
import Contacts from "./home/components/contacts";

export default function Home() {
    return (
        <main className={styles.main}>
            <Contacts />
            <Carusel />
            <Promotion />
            <Products />
        </main>
    );
}
