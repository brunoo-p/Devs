import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Home from './index';

describe('Testing Home page', () => {

    it('renders Home Content', () => {
        
        render(<Home />);
        const contentHome = screen.getByTestId('content');
        expect(contentHome).toBeInTheDocument();
      
        screen.getByRole('button', {name: /vamos começar/i});
        screen.getByRole('button', {name: /ja tenho cadastro/i});
        
    });
      
    it('onclick JA TENHO CADASTRO button', () => {
        render(<Home/>);

        const loginButton = screen.getByTestId('login');
        userEvent.click(loginButton);

        expect(screen.queryByRole('register-form')).not.toBeInTheDocument();
        
        
        const loginForm = screen.getByTestId("login-form");
        expect(loginForm).toBeTruthy();

        
        const inputLogin = screen.getByTestId('inputLogin');
        userEvent.type(inputLogin, "brunoop");

        fireEvent.submit(loginForm);  

    });

    it('onclick VAMOS COMEÇAR button', () => {
        render(<Home/>);
        
        const registerButton = screen.getByTestId('start');
        userEvent.click(registerButton);

        expect(screen.queryByRole('login-form')).not.toBeInTheDocument();

        const registerForm = screen.getByTestId("register-form");
        expect(registerForm).toBeTruthy();
    

        const inputName = screen.getByTestId('inputNameRegister');
        const inputNickname = screen.getByTestId('inputNicknameRegister');
        const inputGender = screen.getByTestId('inputGender');

        
        userEvent.type(inputName, "Bruno");
        userEvent.type(inputNickname, "brunoop");
        fireEvent.click(inputGender);

        fireEvent.submit(registerForm);  
    });
      
});
