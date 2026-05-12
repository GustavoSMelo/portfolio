import styles from "./errors.module.css";

const Error = () => (
    <p className={styles.errorContainer}>
        comando não encontrado, use o comando `help` para ver todos os executáveis
        suportados
    </p>
);

export default Error;
