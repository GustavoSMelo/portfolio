import { useState, useEffect, useRef, type FC } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Review.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

interface Review {
    name: string;
    role: string;
    text: string;
    rating: number;
}

const reviews: Review[] = [
    {
        name: "Leonardo Fernandes",
        role: "Head of Tecnology @pointmedia",
        text: "O Gus sempre foi um cara fora da curva, sempre com uma mentalidade de aprendizado contínuo, estando 100% do tempo disponivel e trabalhando ate altas madrugadas. Um dos melhores devs que tive a oportunidade de trabalhar",
        rating: 5,
    },
    {
        name: "Marcos Antonio",
        role: "Senior Software Developer @pointmedia",
        text: "Trabalhar com o Gus sempre foi uma experiencia de alta performance e entregas, sempre realizamos projetos gigantescos juntos em pouquissimo tempo disponivel",
        rating: 5,
    },
    {
        name: "Vitor Lopes Pereira",
        role: "Squad Leader @infracommerce",
        text: "Profissional excepcional em e-commerce, com histórico impressionante em funcionalidades para varejistas digitais. Comunicação excelente e colaboração efetiva com diferentes equipes. Um ativo valioso que cria diferença significativa em qualquer projeto.",
        rating: 5,
    },
    {
        name: "Thiago Jesus",
        role: "Diretor de tecnologia @infracommerce",
        text: "Talento nato, à frente de seu tempo. Extremamente proativo, sempre disposta a contribuir e agregar valor ao time. High potential que busca constantly novas atualizações e capacitações. Recomendo para empresas de diversos segmentos.",
        rating: 5,
    },
    {
        name: "Matheus Oliveira da Silva",
        role: "Senior Developer @infracommerce",
        text: "O Gustavo é um profissional fora da curva com quem tive o prazer de trabalhar! No nosso dia a dia, ele sempre esteve disposto a ajudar e a crescer junto com o time, destacando-se por sua versatilidade técnica e perícia.  Mesmo nos momentos mais decisivos, fazia de tudo para estar um passo a frente, principalmente no que tange a entregar um trabalho de excelência técnica e seguindo as melhores práticas do mercado.",
        rating: 5,
    },
    {
        name: "Cristiano da Silva",
        role: "Desenvolvedor Senior @infracommerce",
        text: "Profissional com habilidades impressionantes em diversas áreas. Altamente motivado, aprende rapidamente e se adapta bem a novas tecnologias. Colaborativo, sempre disposta a ajudar colegas com ideias e soluções inovadoras.",
        rating: 5,
    },
    {
        name: "Italo Carvalho",
        role: "Senior Software Engineer @infracommerce & Coinbase",
        text: "Admiro as conversas que tivemos sobre relacao ao ecosistema unix, me apresentou a tecnologias disruptivas que hoje sao core do meu dia a dia",
        rating: 4,
    },
];

const Avaliacoes: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<HTMLDivElement>(null);

    const prev = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const next = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

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
                carouselRef.current,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse",
                    },
                },
            );

            gsap.fromTo(
                dotsRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: 0.4,
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
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, scale: 0.9, x: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    duration: 0.4,
                    ease: "power3.out",
                },
            );
        }
    }, [currentIndex]);

    return (
        <section id="avaliacoes" className={styles.section} ref={sectionRef}>
            <div className={styles.container}>
                <h2 ref={titleRef} className={styles.title}>
                    Avaliações
                </h2>
                <div className={styles.carousel} ref={carouselRef}>
                    <button
                        onClick={prev}
                        className={styles.arrow}
                        aria-label="Anterior"
                    >
                        <FiChevronLeft />
                    </button>
                    <div className={styles.card} ref={cardRef}>
                        <div className={styles.stars}>
                            {Array.from({
                                length: reviews[currentIndex].rating,
                            }).map((_, i) => (
                                <span key={i} className={styles.star}>
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className={styles.text}>
                            &quot;{reviews[currentIndex].text}&quot;
                        </p>
                        <div className={styles.author}>
                            <span className={styles.name}>
                                {reviews[currentIndex].name}
                            </span>
                            <span className={styles.role}>
                                {reviews[currentIndex].role}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={next}
                        className={styles.arrow}
                        aria-label="Próximo"
                    >
                        <FiChevronRight />
                    </button>
                </div>
                <div className={styles.dots} ref={dotsRef}>
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`${styles.dot} ${
                                i === currentIndex ? styles.dotActive : ""
                            }`}
                            aria-label={`Ir para avaliação ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Avaliacoes;
