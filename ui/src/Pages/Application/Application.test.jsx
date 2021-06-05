import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Application from './index';

describe('Test Application Page', () => {
    it('render Application Content ', () => {
        
        render(<Application/>);
        expect(screen.getByTestId('ApplicationContainer')).toBeInTheDocument();
    });
    
});