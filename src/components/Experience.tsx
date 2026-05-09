import { useEffect, useRef, type FC } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Experience.module.css";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
    title: string;
    company: string;
    description: string;
    techs: string[];
    start: string;
    end: string;
}

const experiences: ExperienceItem[] = [
    {
        title: "Fullstack Developer (PHP & Typescript)",
        company: "Point media",
        description:
            "Ajustes e fixes de bugs no módulo Reanimate (contrato fechado). Integração Master Motion com Google ADS via NestJS. Desenvolvimento de módulos Dynamic Ads, SaaS e integração ERP da ERPFlex para NFe e gestão de contratos. Desenvolvimento de LP Nestlé Nutren Senior.",
        techs: [
            "React",
            "Laravel",
            "Docker",
            "MariaDB",
            "NestJS",
            "Electron",
            "Ionic",
            "ChatGPT",
            "ElevenLabs",
        ],
        start: "Set 2023",
        end: "Abr 2026",
    },
    {
        title: "Typescript Fullstack Developer",
        company: "Infracommerce",
        description:
            "Desenvolvimento de features para sistema de crédito. Migração de sistema de cashback legado. Features e fixes para sistema de pagamentos de lojas IFC. Plataforma interna de automação de cobranças. Migração de proxy de segurança PHP para anti fraude com Node.JS e React.js.",
        techs: ["React", "Node.js", "MySQL", "Nest.JS", "PHP Legado"],
        start: "Mar 2022",
        end: "Mai 2023",
    },
    {
        title: "Estagiario -> Junior Backend Developer",
        company: "Webjump",
        description:
            "Criacao do sistema de lancamento de email para o Broto by Banco do Brasil e Manutencao e Bugfixes para 333Obra by Votoram",
        techs: ["PHP", "Magento2", "MySQL", "Git"],
        start: "Nov 2021",
        end: "Fev 2022",
    },
];

const Experience: FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse",
                    },
                },
            );

            if (timelineRef.current) {
                const items = timelineRef.current.querySelectorAll(
                    `.${styles.item}`,
                );
                gsap.fromTo(
                    items,
                    { opacity: 0, x: -40 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: timelineRef.current,
                            start: "top 85%",
                            toggleActions: "play reverse play reverse",
                        },
                    },
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" className={styles.section} ref={sectionRef}>
            <div className={styles.container}>
                <h2 ref={titleRef} className={styles.title}>
                    Experience
                </h2>
                <div className={styles.timeline} ref={timelineRef}>
                    {experiences.map((exp, i) => (
                        <div key={i} className={styles.item}>
                            <div className={styles.dot} />
                            <div className={styles.content}>
                                <div className={styles.header}>
                                    <div>
                                        <h3 className={styles.expTitle}>
                                            {exp.title}
                                        </h3>
                                        <p className={styles.company}>
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className={styles.date}>
                                        {exp.start} - {exp.end}
                                    </span>
                                </div>
                                <p className={styles.description}>
                                    {exp.description}
                                </p>
                                <div className={styles.techs}>
                                    {exp.techs.map((tech, j) => (
                                        <span
                                            key={j}
                                            className={styles.techTag}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
