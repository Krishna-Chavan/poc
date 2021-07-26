import { render,screen } from "@testing-library/react";
import Card from "../components/homedetails/Card";
import {render as renderer,unmountComponentAtNode} from 'react-dom'

describe('rendering card component',()=>{
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
    test('card cpmonent should have 4 paragraph with card-text class',()=>{
        renderer(<Card />,element);
        const links = element.getElementsByTagName('p');
        for(let i=1;i<links.length;i++){
            expect(links[i]).toHaveClass('card-text');
        }
    })

    test('should have image tag with alt name my name',()=>{
        render(<Card />);
        expect(screen.getByAltText('my-home')).toHaveClass('card-img-top')
    })
})