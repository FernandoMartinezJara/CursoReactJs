
import {shallow} from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {

    //React library test
    // test('debe mostrar el mensaje CounterApp', () => {
    //     const saludo = 'CounterApp';
    //     const { getByText } = render(<PrimeraApp saludo={'CounterApp'} />);

    //     expect(getByText(saludo)).toBeInTheDocument();
        
    // });

    test('dene de mostrar <PrimeraApp/>', () => {

        const saludo = 'CounterApp'
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe mostrar el subitulo enviado por props ', () => {
        const saludo = 'Hola, Soy goku';
        const subtitulo = 'Soy un subtitulo!';
        const wrapper = shallow(
            <PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe(subtitulo);
        
    })
    
    


    
    
})
