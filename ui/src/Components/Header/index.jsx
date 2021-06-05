import { Container, Content } from './styles';
import PropTypes from 'prop-types';

export default function Header({ children }) {
    
    return (
        <Container>
            <Content>
                { children }
            </Content>  
        </Container>
    )
}

Header.propTypes = {
    children: PropTypes.element
};
