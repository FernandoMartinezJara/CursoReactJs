import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas a componente <GifGrid/>', () => {

    const category = 'Bon Jovi';
    
    test('debe de mostrar correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
        
    })


    test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        
        const imgs = [{
            id: 'ABC',
            url: 'https://www.google.cl',
            title: 'Cantantes'
        }];

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false

        })
        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
    })
    
    
})
