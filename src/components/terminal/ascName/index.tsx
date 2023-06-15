import { PreArea } from "./style";
import AscName from '../../../assets/name.asc.txt';
import { useEffect, useState } from "react";

const ASCArt = () => {
    const [name, setName] = useState('');

    const readAscText = async () => {
        const text = await((await fetch(AscName)).text());
        setName(text);
    };

    useEffect(() => {
        readAscText()
    }, []);


    return (
        <PreArea>{name}</PreArea>
    );
};

export default ASCArt;
