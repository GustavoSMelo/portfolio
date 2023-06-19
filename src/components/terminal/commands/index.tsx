import { ICommand } from "../../../types/interface/components/command.interface";
import returnCommandList from "./content/list";

const Commands = ({ bin } : ICommand) => {
    const exec = () => {
        const commands = returnCommandList();

        return commands.find(command => command.name === bin)?.component || <></>;
    }

    return exec();
};

export default Commands;
