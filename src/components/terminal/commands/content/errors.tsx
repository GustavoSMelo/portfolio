import styles from "./errors.module.css";

const Error = () => (
    <p className={styles.errorContainer}>
        command not founded, use the command `help` to see all supported
        executables
    </p>
);

export default Error;
