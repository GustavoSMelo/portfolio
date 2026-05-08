import { useState, useEffect, type FC } from 'react';
import styles from './Navbar.module.css';
import cup from '../assets/cup.png';

interface NavbarProps {
    onContactClick: () => void;
}

const navLinks = [
    { label: 'Tecnologias', href: '#technologies' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Experiência', href: '#experience' },
];

const Navbar: FC<NavbarProps> = ({ onContactClick }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
            <div className={styles.container}>
                <a href='#hero' className={styles.logo}>
                    <img src={cup} alt='Cup' className={styles.logoCoffee} />
                    <span className={styles.logoText}>
                        Guty
                        <span className={styles.logoDev}>.dev</span>
                    </span>
                    <span className={styles.logoBracket}>/&gt;</span>
                </a>
                <div
                    className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}
                >
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            className={styles.link}
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            onContactClick();
                            setMenuOpen(false);
                        }}
                        className={styles.cta}
                    >
                        Contato
                    </button>
                </div>
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label='Menu'
                >
                    <span
                        className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen1 : ''}`}
                    ></span>
                    <span
                        className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen2 : ''}`}
                    ></span>
                    <span
                        className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen3 : ''}`}
                    ></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
