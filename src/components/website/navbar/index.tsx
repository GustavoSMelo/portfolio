import { Container } from './styled';
import { PiCoffeeBold } from 'react-icons/pi'

const Navbar = () => {
    return (
        <Container>
            <div className='IconContent'>
                <PiCoffeeBold className='coffee-icon' />
                <p>Gustavo S. Melo | Portfolio</p>
            </div>
        </Container>
    )
};

export default Navbar;
