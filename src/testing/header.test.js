import { render,screen } from "@testing-library/react";
import Header from "../components/header/Header";
import { BrowserRouter as Router } from 'react-router-dom'
import {render as renderer,unmountComponentAtNode} from 'react-dom'
import Footer from "../components/footer/Footer";


describe('Buy Home test cases',()=>{

    let element;
    beforeEach(()=>{
      element = document.createElement('div')
        document.body.appendChild(element)
    })
    afterEach(()=>{
        unmountComponentAtNode(element);
        element.remove();
        element = null;
    })

    test('should render header component with text BuyHomes',()=>{
        render(<Router><Header /></Router>);
        expect(screen.getByText('BuyHomes')).toBeInTheDocument();
    });


    test('should render 1 link in footer component',()=>{
        renderer(<Footer />,element)
        const count = element.getElementsByTagName('a').length;
        expect(count).toBe(13);
    })
});