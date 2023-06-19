import returnCommandList from '../list';
import { Container } from './style';
const Help = () => {
    const getAllCommands = () => {
        const commands = returnCommandList();

        return (
            <Container>
                <thead>
                    <tr>
                        <td className='commandNameTitle'>Name: </td>
                        <td className='commandDescriptionTitle'>Description: </td>
                    </tr>
                </thead>
                <tbody>
                    {commands.map((command) => (
                        <tr key={command.name}>
                            <td>{command.name}</td>
                            <td>{command.description}</td>
                        </tr>
                    ))}
                </tbody>
            </Container>
        );
    };

    return getAllCommands();
};

export default Help;
