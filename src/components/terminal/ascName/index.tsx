import styles from "./asc.module.css";
import AscName from "../../../assets/name.asc.txt";
import { useEffect, useState } from "react";

const ASCArt = () => {
    const [name, setName] = useState("");

    const readAscText = async () => {
        const text = await (await fetch(AscName)).text();
        setName(text);
    };

    useEffect(() => {
        readAscText();
    }, []);

    return <div className={styles.preArea}>{name}</div>;
};

export default ASCArt;
