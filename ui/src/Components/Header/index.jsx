import { Container, Content } from './styles';

export default function Header({ children }) {
    
    return (
        <Container>
            <Content>
                { children }
            </Content>  
        </Container>
    )
}

