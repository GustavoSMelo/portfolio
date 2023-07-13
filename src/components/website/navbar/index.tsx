import { Container } from './styled';

const Navbar = () => {
    return (
        <Container>
            <div>
                <p>Gustavo S Melo</p>
            </div>

            <div>
                <ul>
                    <span>
                        <p>|</p>
                    </span>
                    <span>
                        <li>About</li>
                        <p>|</p>
                    </span>
                    <span>
                        <li>Experiences</li>
                        <p>|</p>
                    </span>
                    <span>
                        <li>Tecnologies</li>
                        <p>|</p>
                    </span>
                    <span>
                        <li>Contacts</li>
                        <p>|</p>
                    </span>
                </ul>
            </div>
        </Container>
    )
};

export default Navbar;
