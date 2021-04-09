import { shallow } from "enzyme"
import CounterApp from '../CounterApp';

describe('Pruebas con <CounterApp/>', () => {
    
    let wrapper = shallow(<CounterApp value={1}/>)
   
    beforeEach(() => {
        wrapper = shallow(<CounterApp value={1}/>)
    })

    test('debe de mostrar <CounterApp/> correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar el valor por defecto', () => {
        const expectedH2 = wrapper.find('h2').text().trim()
        expect(expectedH2).toBe('1');
    });

    test('debe incrementar con el boton +1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText).toBe('2');
    });

    test('debe reducir con el boton -1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText).toBe('0');
    });
    
    test('debe de resetar al valor por defecto', () => {

        const wrapper = shallow(<CounterApp value={1}/>)

        wrapper.find('button').at(2).simulate('click');

        wrapper.find('button').at(1).simulate('click');

        const expectedValue = wrapper.find('h2').text().trim();

        expect(expectedValue).toBe('1')

    })
    

})
