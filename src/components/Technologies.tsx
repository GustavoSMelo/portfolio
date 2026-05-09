import { useEffect, useRef, type FC } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Technologies.module.css";
import ai from "../assets/ai.png";
import aws from "../assets/aws.png";
import cloudflare from "../assets/cloudflare.png";
import docker from "../assets/docker.png";
import git from "../assets/git.png";
import hostinger from "../assets/hostinger.png";
import laravel from "../assets/laravel.png";
import linux from "../assets/linux.png";
import mariadb from "../assets/mariadb.png";
import mysql from "../assets/mysql.png";
import nestjs from "../assets/nestjs.png";
import nextjs from "../assets/nextjs.png";
import nginx from "../assets/nginx.png";
import php from "../assets/php.png";
import postgres from "../assets/postgres.png";
import react from "../assets/react.png";
import vue from "../assets/vue.png";

gsap.registerPlugin(ScrollTrigger);

const technologies: { name: string; logo: string }[] = [
    { name: "Laravel", logo: laravel },
    { name: "React", logo: react },
    { name: "Next.js", logo: nextjs },
    { name: "NestJS", logo: nestjs },
    { name: "Vue.js", logo: vue },
    { name: "Git", logo: git },
    { name: "Docker", logo: docker },
    { name: "Nginx", logo: nginx },
    { name: "MariaDB", logo: mariadb },
    { name: "PostgreSQL", logo: postgres },
    { name: "MySQL", logo: mysql },
    { name: "Linux", logo: linux },
    { name: "PHP", logo: php },
    { name: "Hostinger", logo: hostinger },
    { name: "Cloudflare", logo: cloudflare },
    { name: "AWS", logo: aws },
    { name: "AI", logo: ai },
];

const Technologies: FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                [titleRef.current, descRef.current],
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse",
                    },
                },
            );
        });

        if (sliderRef.current) {
            const totalWidth = sliderRef.current.scrollWidth / 2;

            const tween = gsap.to(sliderRef.current, {
                x: -totalWidth,
                duration: 30,
                ease: "none",
                repeat: -1,
            });

            const checkLoop = () => {
                if (sliderRef.current) {
                    const currentX = gsap.getProperty(
                        sliderRef.current,
                        "x",
                    ) as number;
                    if (currentX <= -totalWidth) {
                        gsap.set(sliderRef.current, { x: 0 });
                    }
                }
            };

            const interval = setInterval(checkLoop, 100);

            return () => {
                tween.kill();
                clearInterval(interval);
            };
        }

        return () => ctx.revert();
    }, []);

    return (
        <section id="technologies" className={styles.section} ref={sectionRef}>
            <div className={styles.container}>
                <h2 ref={titleRef} className={styles.title}>
                    Tecnologias
                </h2>
                <p ref={descRef} className={styles.description}>
                    Tecnologias que eu uso para fazer meus projetos
                </p>
            </div>
            <div className={styles.sliderWrapper}>
                <div ref={sliderRef} className={styles.slider}>
                    {[...technologies, ...technologies].map((tech, i) => (
                        <div key={i} className={styles.tech}>
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className={styles.techIcon}
                            />
                            <span className={styles.techName}>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
