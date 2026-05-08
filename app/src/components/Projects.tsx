import { useState, type FC } from 'react';
import styles from './Projects.module.css';

interface Project {
    title: string;
    description: string;
    techs: string[];
    bgColor: string;
    label: string;
}

const projects: Record<string, Project[]> = {
    company: [
        {
            title: 'E-commerce Platform',
            description:
                'Plataforma completa de e-commerce com painel admin, carrinho, pagamentos e gestão de estoque.',
            techs: ['Laravel', 'React', 'PostgreSQL', 'Docker'],
            bgColor: '#57595B',
            label: 'E-commerce',
        },
        {
            title: 'CRM System',
            description:
                'Sistema de gestão de relacionamento com clientes com dashboard analítico e automações.',
            techs: ['Vue.js', 'Node.js', 'MySQL', 'Nginx'],
            bgColor: '#57595B',
            label: 'CRM',
        },
        {
            title: 'API Gateway',
            description:
                'Gateway de APIs com autenticação, rate limiting e documentação automática.',
            techs: ['NestJS', 'Docker', 'Redis', 'Linux'],
            bgColor: '#57595B',
            label: 'API Gateway',
        },
    ],
    personal: [
        {
            title: 'Portfolio Guty.dev',
            description:
                'Meu portfolio pessoal com animações, design único e tema de café.',
            techs: ['React', 'GSAP', 'Next.js'],
            bgColor: '#57595B',
            label: 'Portfolio',
        },
        {
            title: 'Coffee Finder App',
            description:
                'Aplicativo para encontrar as melhores cafeterias da região com avaliações.',
            techs: ['React', 'MariaDB', 'PHP'],
            bgColor: '#57595B',
            label: 'Coffee Finder',
        },
    ],
};

type TabKey = 'company' | 'personal';

const Projects: FC = () => {
    const [activeTab, setActiveTab] = useState<TabKey>('company');

    return (
        <section id='projects' className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Projetos</h2>
                <div className={styles.tabs}>
                    <button
                        onClick={() => setActiveTab('company')}
                        className={`${styles.tab} ${activeTab === 'company' ? styles.tabActive : ''}`}
                    >
                        Company Projects
                    </button>
                    <button
                        onClick={() => setActiveTab('personal')}
                        className={`${styles.tab} ${activeTab === 'personal' ? styles.tabActive : ''}`}
                    >
                        Personal Projects
                    </button>
                </div>
                <div className={styles.grid}>
                    {projects[activeTab].map((project, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>
                                {project.title}
                            </h3>
                            <div
                                className={styles.cardImage}
                                style={{ backgroundColor: project.bgColor }}
                            >
                                {project.label}
                            </div>
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
                                <button className={styles.cardBtn}>
                                    View Project
                                </button>
                                <button className={styles.cardBtnAlt}>
                                    View Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
