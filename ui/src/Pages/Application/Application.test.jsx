import { render, screen } from '@testing-library/react';
import Application from '.';

describe('Test Application Page', () => {
    it('render Application Content ', () => {
        
        render(<Application/>);
        expect(screen.getByTestId('ApplicationContainer')).toBeInTheDocument();
    });
    
});