import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import GifExpertApp from '../../GifExpertApp';

describe('Pruebas componente <GifExpertApp/>', () => {

    test('debe de mostrar correctamente', () => {

        const wrapper = shallow(<GifExpertApp/>);

        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('debe de mostrar una lista de categorias', () => {

        const categories = ['Bon Jovi', 'Guns n Roses'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('GifGrid').length).toBe(categories.length);


        
    })
    
    
})
