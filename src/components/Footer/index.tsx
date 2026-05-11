import { useEffect, useRef, type FC } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./footer.module.css";
import cup from "../../assets/cup.png";

gsap.registerPlugin(ScrollTrigger);

const Footer: FC = () => {
    const footerRef = useRef<HTMLElement>(null);
    const brandRef = useRef<HTMLDivElement>(null);
    const contactsRef = useRef<HTMLDivElement>(null);
    const copyrightRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                brandRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse",
                    },
                },
            );

            gsap.fromTo(
                contactsRef.current?.children || [],
                { opacity: 0, y: 15 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contactsRef.current,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse",
                    },
                },
            );

            gsap.fromTo(
                copyrightRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse",
                    },
                },
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer className={styles.footer} ref={footerRef}>
            <div className={styles.container}>
                <div className={styles.brand} ref={brandRef}>
                    <div className={styles.logo}>
                        <img src={cup} alt="Cup" className={styles.logoIcon} />
                        <span>Guty.dev</span>
                    </div>
                    <p className={styles.tagline}>Code. Coffee. Faith.</p>
                </div>
                <div className={styles.contacts} ref={contactsRef}>
                    <a
                        href="mailto:gsantos15569@gmail.com"
                        className={styles.link}
                    >
                        gsantos15569@gmail.com
                    </a>
                    <a
                        href="https://wa.me/5511993791209"
                        className={styles.link}
                    >
                        +55 11 99379-1209
                    </a>
                    <a
                        href="https://github.com/GustavoSMelo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gustavo-s-melo-66092317a/?skipRedirect=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        LinkedIn
                    </a>
                </div>
                <p className={styles.copyright} ref={copyrightRef}>
                    © {new Date().getFullYear()} Guty.dev. Feito com café, fé e
                    código. <br />
                    Mateus 6:33 "Busquem, pois, em primeiro lugar o Reino de
                    Deus e a sua justiça, e todas essas coisas serão
                    acrescentadas a vocês."
                </p>
            </div>
        </footer>
    );
};

export default Footer;
