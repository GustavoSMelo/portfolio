import React, { useState, type JSX } from "react";
import ASCArt from "../components/terminal/ascName";
import styles from "../styles/terminal.module.css";
import Commands from "../components/terminal/commands";
import convertStringToCommandBin from "../helper/convertStringToCommandBin";
import Error from "../components/terminal/commands/content/errors";
import { useNavigate } from "react-router";

const Terminal = () => {
    const [commandResult, setCommandResult] = useState(<></>);
    const [bin, setBin] = useState("");
    const navigate = useNavigate();

    const execCommand = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ): void => {
        if (event.key === "Enter") {
            event.preventDefault();

            const helper = convertStringToCommandBin(bin);
            setBin("");

            if (helper === "clear") {
                setCommandResult(<></>);
                return;
            } else if (helper === "error") {
                setCommandResult(
                    <>
                        {commandResult} {<Error />}
                    </>,
                );
                return;
            }
            setCommandResult(
                <>
                    {commandResult} {<Commands bin={helper} />}
                </>,
            );
        }
    };

    const renderLine = (): JSX.Element => {
        return (
            <>
                {commandResult}
                <form>
                    <label>
                        <p className={styles.userName}>
                            <span>[</span> guest
                        </p>
                        <p className={styles.host}>
                            <span>@</span>Guty.dev <span>] $</span>
                        </p>
                    </label>
                    <input
                        className="commandInput"
                        type="text"
                        value={bin}
                        placeholder="Click here to type a command..."
                        autoFocus
                        onKeyDown={(event) => execCommand(event)}
                        onChange={(e) => setBin(e.target.value.toLowerCase())}
                    />
                </form>
            </>
        );
    };

    return (
        <main className={styles.terminalContainer}>
            <ASCArt />
            <p>
                Welcome to my portfolio :D <br />
                ------- <br />
                To use, please use the command:{" "}
                <span className={styles.alert} onClick={() => setBin("help")}>
                    help
                </span>{" "}
                to see the command list
                <br />
                ------- <br />
                But if you want to see a GUI portfolio version you can{" "}
                <span
                    className={styles.alert}
                    onClick={() => navigate("/website")}
                >
                    click here
                </span>
            </p>
            <span className="mt10">{renderLine()}</span>
        </main>
    );
};

export default Terminal;
