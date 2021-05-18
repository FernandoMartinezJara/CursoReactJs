import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import '@testing-library/jest-dom';

describe('Pruebas en componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setcategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setcategories={setCategories}/>);
    });

    test('debe de mostrar correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');

        const value = 'Hola mundo';
        input.simulate('change', { target: {
            value
        }});

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(value);
        
    });

    test('No debe llamar el post on sumbit', () => {

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(setCategories ).not.toHaveBeenCalled();

    })

    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo';
        const input = wrapper.find('input');

        input.simulate('change', { target: {
            value
        }});

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(setCategories ).toHaveBeenCalled();
        expect(setCategories ).toHaveBeenCalledTimes(1);
        expect(setCategories ).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');

    })
    
    
    
    
    
})
