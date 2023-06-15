import React from 'react';
import ASCArt from '../../components/terminal/ascName';
import { Container, TerminalAlert } from './terminal.style';

const Terminal = () => {
    const execCommand = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.key === 'Enter' && event.preventDefault();
    };

    const renderLine = () => {
        return (
            <form>
                <label>
                    <p className='userName'>
                        <span>[</span> guest
                    </p>
                    <p className='host'>
                        <span>@</span>GustavoSMelo-portfolio <span>] $</span>
                    </p>
                </label>
                <input type='text' autoFocus onKeyDown={(event) => execCommand(event)} />
            </form>
        );
    };

    return (
        <Container>
            <ASCArt />
            <p>
                Welcome To my portfolio :D <br />
                ------- <br />
                To use, please use the command: <TerminalAlert>help</TerminalAlert> to see the command list <br />
                ------- <br />
                But if you want to see a GUI portfolio version you can click here
            </p>
            {renderLine()}
        </Container>
    );
};

export default Terminal;
