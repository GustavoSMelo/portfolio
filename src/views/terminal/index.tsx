import React, { useState } from 'react';
import ASCArt from '../../components/terminal/ascName';
import { Container, TerminalAlert } from './terminal.style';
import Commands from '../../components/terminal/commands';
import convertStringToCommandBin from '../../helper/convertStringToCommandBin';
import Error from '../../components/terminal/commands/content/errors';

const Terminal = () => {
    const [commandResult, setCommandResult] = useState(<></>);
    const [bin, setBin] = useState('');

    const execCommand = (
        event: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        if (event.key === 'Enter') {
            event.preventDefault();

            const helper = convertStringToCommandBin(bin);
            setBin('');

            if (helper === 'clear') {
                setCommandResult(<></>);
                return;
            } else if (helper === 'error') {
                setCommandResult(
                    <>
                        {commandResult} {<Error />}
                    </>
                );
                return;
            }
            setCommandResult(
                <>
                    {commandResult} {<Commands bin={helper} />}
                </>
            );
        }
    };

    const renderLine = (): JSX.Element => {
        return (
            <>
                {commandResult}
                <form>
                    <label>
                        <p className='userName'>
                            <span>[</span> guest
                        </p>
                        <p className='host'>
                            <span>@</span>GustavoSMelo-portfolio{' '}
                            <span>] $</span>
                        </p>
                    </label>
                    <input
                        className='commandInput'
                        type='text'
                        value={bin}
                        placeholder='Click here to type a command...'
                        autoFocus
                        onKeyDown={(event) => execCommand(event)}
                        onChange={(e) => setBin(e.target.value.toLowerCase())}
                    />
                </form>
            </>
        );
    };

    return (
        <Container>
            <ASCArt />
            <p>
                Welcome to my portfolio :D <br />
                ------- <br />
                To use, please use the command:{' '}
                <TerminalAlert>help</TerminalAlert> to see the command list{' '}
                <br />
                ------- <br />
                But if you want to see a GUI portfolio version you can click
                here
            </p>
            <span className='mt10'>
                {renderLine()}
            </span>
        </Container>
    );
};

export default Terminal;
