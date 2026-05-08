import type { FC } from 'react';
import styles from './Footer.module.css';
import cup from '../assets/cup.png';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <img src={cup} alt='Cup' className={styles.logoIcon} />
                        <span>Guty.dev</span>
                    </div>
                    <p className={styles.tagline}>Code. Coffee. Create.</p>
                </div>
                <div className={styles.contacts}>
                    <a href="mailto:guty.dev@gmail.com" className={styles.link}>
                        guty.dev@gmail.com
                    </a>
                    <a
                        href="https://wa.me/5511999999999"
                        className={styles.link}
                    >
                        +55 11 99999-9999
                    </a>
                    <a
                        href="https://github.com/gutydev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/gutydev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        LinkedIn
                    </a>
                </div>
                <p className={styles.copyright}>
                    © 2024 Guty.dev. Feito com café e código.
                </p>
            </div>
        </footer>
    );
};

export default Footer;