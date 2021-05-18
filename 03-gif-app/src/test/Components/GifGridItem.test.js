import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas para componente <GifGridItem />', () => {

    const title = 'Titulo';
    const url = 'https:www.google.cl';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    test('debe de mostrar <GifGridItem/> ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el titulo ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('debe de obtener una imagen igual al url y all de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe( url );
        expect(img.prop('alt')).toBe( title );
    });
    
    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true);
    })
    
})
