import { ECommand } from "../types/enum/command.enum";
import { ICommand } from "../types/interface/components/command.interface";

const convertStringToCommandBin = (previousText: string): ICommand['bin'] => {
    const commands = Object.values(ECommand).map(object => object.toString());
    let helper: ICommand['bin'];

    if (commands.includes(previousText))
        helper = previousText as unknown as ICommand['bin'];
    else
        helper = 'error';

    return helper;
}

export default convertStringToCommandBin;
