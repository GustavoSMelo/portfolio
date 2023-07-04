import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Gui = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/website');
    }, []);

    return null;
}

export default Gui;
