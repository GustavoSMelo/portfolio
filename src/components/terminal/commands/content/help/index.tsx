import returnCommandList from "../list";
import styles from "./help.module.css";
const Help = () => {
    const getAllCommands = () => {
        const commands = returnCommandList();

        return (
            <div className={styles.helpContainer}>
                <thead>
                    <tr>
                        <td className={styles.commandDescriptionTitle}>
                            Nome:{" "}
                        </td>
                        <td className={styles.commandNameTitle}>
                            Descricao:{" "}
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {commands.map((command) => (
                        <tr key={command.name}>
                            <td className={styles.commandDescriptionTitle}>
                                {command.name}
                            </td>
                            <td className={styles.commandNameTitle}>
                                {command.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </div>
        );
    };

    return getAllCommands();
};

export default Help;
