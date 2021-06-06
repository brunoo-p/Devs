import { render, screen } from '@testing-library/react';
import DetailsDev from '.';

const person = { name: "Vanessa", age: 24, hobby: "Andar de moto"}


    describe('Test Details Dev Component', () => {
        
        test('render content ', () => {
            
            render(<DetailsDev person={person}/>);
            expect(screen.getByTestId('detailsDevContainer')).toBeInTheDocument();
        });

        test('render labels ', () => {
            
            render(<DetailsDev person={person}/>);
            expect(screen.getByText(/hobby/i)).toBeTruthy();
            expect(screen.getByText(/anos/i)).toBeTruthy();
        })
        
        
    });
    