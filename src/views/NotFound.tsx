import { type FC } from "react";
import styles from "../styles/notfound.module.css";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";

const NotFound: FC = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.code}>404</h1>
                    <h2 className={styles.title}>Page not found</h2>
                    <p className={styles.description}>
                        A página que você procura não existe ou foi movida.
                    </p>
                    <a href="/" className={styles.button}>
                        Voltar para home
                    </a>
                </div>
            </main>
        </>
    );
};

export default NotFound;
