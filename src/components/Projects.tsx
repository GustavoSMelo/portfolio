import { useState, useEffect, useRef, type FC } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Projects.module.css";
import reanimateImg from "../assets/projects/reanimate.png";
import obra333Img from "../assets/projects/333obra.png";
import brotoImg from "../assets/projects/broto.png";
import infrapayImg from "../assets/projects/infrapay.png";
import brainrotImg from "../assets/projects/brainrot_vaccine.png";
import erickImg from "../assets/projects/erick_website.png";
import planossauroImg from "../assets/projects/planossauro.png";

gsap.registerPlugin(ScrollTrigger);

interface Project {
    title: string;
    description: string;
    techs: string[];
    image?: string;
    link?: string;
    company?: string;
}

const projects: Record<string, Project[]> = {
    company: [
        {
            title: "Reanimate",
            company: "PointMedia",
            description:
                "Desenvolvimento de plataforma SaaS (Master Motion, ReplicateAds, Dynamic) para produção de templates de mídia",
            techs: ["Laravel", "React", "MySQL", "Next.JS"],
            image: reanimateImg,
        },
        {
            title: "333 Obra",
            company: "Webjump",
            description:
                "Desenvolvimento e manutenção de bugs e features no sistema do e-commerce de 333Obra by votorantim",
            techs: ["PHP", "Magento 2", "MySQL"],
            image: obra333Img,
        },
        {
            title: "Broto",
            company: "Webjump",
            description:
                "Gerenciamento de lançamento e envio de email e desenvolvimento de novas features no sistema do Broto",
            techs: ["PHP", "Magento 2", "MySQL"],
            image: brotoImg,
        },
        {
            title: "InfraPay",
            company: "Infracommerce",
            description:
                "Migração de um sistema legado e interno de antifraude para novas arquiteturas e tecnologias",
            techs: ["PHP", "Magento 2", "MySQL"],
            image: infrapayImg,
        },
    ],
    personal: [
        {
            title: "Brainrot Vaccine",
            description:
                "Extensão para evitar conteúdos brainrots, como conteúdos de vídeos curtos (shorts), pornografia, gambling e IA (principalmente para estudos)",
            techs: ["Vue.JS", "Google Chrome Extension", "Firefox Extension"],
            image: brainrotImg,
            link: "https://chromewebstore.google.com/detail/brainrot-vaccine/kgacpgljpahannknnbmbogahojphglle?authuser=0&hl=pt-BR&pli=1",
        },
        {
            title: "Erick Website",
            description:
                "Site portfólio para meu amigo Erick Alves para demonstrar seu trabalho e habilidades como desenvolvedor e analista de dados",
            techs: ["Vue.JS", "Vite.JS", "Vercel"],
            image: erickImg,
            link: "https://portfolioerickalves.vercel.app/",
        },
        {
            title: "Planossauro",
            description:
                "Plataforma SaaS para desenvolvimento e criação de planejamentos de aula para educadores",
            techs: [
                "Vue.JS",
                "Laravel",
                "ChatGPT",
                "Nginx",
                "Docker",
                "Hostinger",
                "Cloudflare",
            ],
            image: planossauroImg,
            link: "https://planossauro.com.br",
        },
    ],
};

type TabKey = "company" | "personal";

const Projects: FC = () => {
    const [activeTab, setActiveTab] = useState<TabKey>("company");
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

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

            gsap.fromTo(
                tabsRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse",
                    },
                },
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (gridRef.current) {
            const cards = gridRef.current.querySelectorAll(`.${styles.card}`);
            cards.forEach((card) => {
                gsap.set(card, { opacity: 0, y: 40, scale: 0.95 });
            });
            gsap.to(cards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out",
            });
        }
    }, [activeTab]);

    return (
        <section id="projects" className={styles.section} ref={sectionRef}>
            <div className={styles.container}>
                <h2 ref={titleRef} className={styles.title}>
                    Projetos
                </h2>
                <div ref={tabsRef} className={styles.tabs}>
                    <button
                        onClick={() => setActiveTab("company")}
                        className={`${styles.tab} ${activeTab === "company" ? styles.tabActive : ""}`}
                    >
                        Company Projects
                    </button>
                    <button
                        onClick={() => setActiveTab("personal")}
                        className={`${styles.tab} ${activeTab === "personal" ? styles.tabActive : ""}`}
                    >
                        Personal Projects
                    </button>
                </div>
                <div ref={gridRef} className={styles.grid}>
                    {projects[activeTab].map((project, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>
                                    {project.title}
                                </h3>
                                {activeTab === "company" && project.company && (
                                    <span className={styles.cardCompany}>
                                        {project.company}
                                    </span>
                                )}
                            </div>
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.cardImage}
                                />
                            ) : (
                                <div className={styles.cardImagePlaceholder}>
                                    {project.title}
                                </div>
                            )}
                            <p className={styles.cardDescription}>
                                {project.description}
                            </p>
                            <div className={styles.techList}>
                                {project.techs.map((tech, j) => (
                                    <span key={j} className={styles.techTag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className={styles.cardButtons}>
                                <a
                                    href={project.link || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.cardBtn}
                                >
                                    View Project
                                </a>
                                {activeTab === "personal" && (
                                    <button className={styles.cardBtnAlt}>
                                        View Code
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
