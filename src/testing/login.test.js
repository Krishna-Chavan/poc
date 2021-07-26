import { render,screen } from "@testing-library/react";
import Login from "../components/login/Login";
import {render as renderer,unmountComponentAtNode} from 'react-dom'

describe('rendering Login component',()=>{
    let element;
    beforeEach(()=>{
        element = document.createElement('div');
        document.body.appendChild(element)
    });
    afterEach(()=>{
        unmountComponentAtNode(element);
        element.remove();
        element = null;
    })
    test('should have two input field with test id input',()=>{
        render(<Login/>,element);
        let links= element.getElementsByTagName('input');
        for(let i=1;i<links.lenght;i++){
            expect(links[i]).toHaveClass('form-control');
        }
    });

    test('should have font awesome i tag',()=>{
        render(<Login/>,element);
        const count = element.getElementsByTagName('i');
        for(let i=1;i<count.lenght;i++){
            expect(count[i]).toBe(4);
        }
    });

    test('should have one Login button with text Login',()=>{
        render(<Login/>);
        expect(screen.getByTestId('loginbtn')).toHaveTextContent('Login');
    });

    test('should have 5 hyperlinks',()=>{
        render(<Login/>,element);
        const links = element.getElementsByTagName('a');
        for(let i=1;i<links.lenght;i++){
            expect(links[i]).toBe(5);
        }
    });

    // test('should have Login text',()=>{
    //     render(<Login/>);
    //     expect(screen.getByText('Login')).toHaveClass('signin-heading');
    // })
});