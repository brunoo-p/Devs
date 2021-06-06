import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AccountConfiguration from '.';

describe('Test Account Configuration', () => {
    
    test('render content ', () => {
        
        render(<AccountConfiguration/>);
        expect(screen.getByTestId('configurationContainer')).toBeInTheDocument();
    });

    test('render with props ', () => {

        const handleFilter = jest.fn();
        const handleSettings = jest.fn();
        let settings = false; 


        render( <AccountConfiguration
            setFilter={handleFilter}
            settings={settings}
            setSettings={handleSettings}
            />
        );

    });

    test('write in the filter ', () => {
        const handleFilter = jest.fn();
        const handleSettings = jest.fn();
        let settings = false; 


        render( <AccountConfiguration
            setFilter={handleFilter}
            settings={settings}
            setSettings={handleSettings}
            />
        );
        
        userEvent.click(screen.getByTestId('btnToggleFilter'));

        expect(screen.getByTestId('inputFilter')).toBeInTheDocument();
        userEvent.type(screen.getByTestId('inputFilter'), "ukulele");
        fireEvent.keyUp(screen.getByTestId('inputFilter'), {key:"Enter", code: 13});
        
    });  
    
});