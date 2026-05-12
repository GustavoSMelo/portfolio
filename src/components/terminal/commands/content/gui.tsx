import { useEffect } from "react";
import { useNavigate } from "react-router";

const Gui = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/website");
    }, []);

    return null;
};

export default Gui;
