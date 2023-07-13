import { IChoosedExperience } from "../../../types/interface/components/choosedExperience.interface";
import Webjump from "./Webjump";
import Infracommerce from "./infra";

const ChoosedExperience = ({ experienceId }: IChoosedExperience): JSX.Element => {
    const experienceDetails = () => {
        let jsxHelper = <></>;

        switch (experienceId) {
            case 'ifc':
                jsxHelper = <Infracommerce />;
                break;
            default:
                jsxHelper = <Webjump />;
            break;
        }

        return jsxHelper;
    }

    return experienceDetails();
};

export default ChoosedExperience;
