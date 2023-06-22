import { ICommand } from "../../../types/interface/components/command.interface";
import returnCommandList from "./content/list";

const Commands = ({ bin } : ICommand) => {
    const exec = () => {
        const commands = returnCommandList();

        const helper = commands.find(command => command.name === bin)?.component || <></>;

        return helper
    }

    return exec();
};

export default Commands;
