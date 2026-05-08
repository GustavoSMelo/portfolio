import type { FC } from 'react';
import styles from './Experience.module.css';

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
        title: 'Senior Fullstack Developer',
        company: 'TechCorp Solutions',
        description:
            'Liderança técnica de equipe, arquitetura de sistemas escaláveis, mentoria de desenvolvedores júnior.',
        techs: ['React', 'Laravel', 'Docker', 'PostgreSQL'],
        start: 'Jan 2023',
        end: 'Present',
    },
    {
        title: 'Fullstack Developer',
        company: 'Digital Innovations',
        description:
            'Desenvolvimento de aplicações web, APIs RESTful, integração com sistemas de pagamento.',
        techs: ['Vue.js', 'Node.js', 'MySQL', 'AWS'],
        start: 'Mar 2021',
        end: 'Dez 2022',
    },
    {
        title: 'Junior Web Developer',
        company: 'StartUp Labs',
        description:
            'Desenvolvimento frontend, criação de interfaces responsivas, aprendizado ágil.',
        techs: ['React', 'PHP', 'MariaDB', 'Git'],
        start: 'Jun 2019',
        end: 'Fev 2021',
    },
];

const Experience: FC = () => {
    return (
        <section id="experience" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Experience</h2>
                <div className={styles.timeline}>
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
                                        <span key={j} className={styles.techTag}>
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