import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SettingsProfile from './index';

describe('Test Settings Profile Page', () => {
    
    it('render Settings Profile Content', () => {
        
        render(<SettingsProfile/>);
        const elementContent = screen.getByTestId('settingsProfileContent');
        expect(elementContent).toBeInTheDocument();

        const inputFile = screen.getByTestId('inputFile');
        const inputName = screen.getByTestId('inputName');
        const inputHobby = screen.getByTestId('inputHobby');
       
        userEvent.click(inputFile);
        userEvent.type(inputName, 'Paulino');
        userEvent.type(inputHobby, 'Andar de moto');
    
    });
});
