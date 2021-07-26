import { render,screen } from "@testing-library/react";
import Home from "../components/home/Home";

describe('rendering home component',()=>{
    test('should have Search text in button of Home component',()=>{
        render(<Home />);
        expect(screen.getByTestId('btnSearch')).toHaveTextContent('Search');
    });
    test('Home component should have bootstrap class btn',()=>{
        render(<Home />);
        expect(screen.getByTestId('btnSearch')).toHaveClass('btn');
    });
    test('should have input filed with class form-control',()=>{
        render(<Home/>);
        expect(screen.getByTestId('inpSearch')).toHaveClass('form-control');
    });
   
})