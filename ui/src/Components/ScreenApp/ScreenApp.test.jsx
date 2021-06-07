import { render, screen } from '@testing-library/react';
import ScreenApp from '.';


const persons = [
    {
        name:"Bruno",
        nickname: "brunoop",
        gender: "M",
        schooseGender : "F",
        age: 24,
        hobby: "Andar de moto",
        birthDate: "01-01-2021",
        isDeleted: false,
        imageProfile: null,
        imagePath: null
    }
];

describe('Test ScreenApp Page', () => {
    test('render content', () => {
        
        render (<ScreenApp persons={persons}/>);

        expect(screen.getByTestId('screenAppContent')).toBeInTheDocument();
    });
    
})
