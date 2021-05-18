import { getGifs } from "../../helpers/getGifs"

describe('Pruebas getGifs Fecth', () => {


    test('debe de traer 10 elementos ', async () => {
        const gifs = await getGifs('Bon Jovi');

        expect(gifs.length).toBe(10);
    })


    test('Debe de traer 0 elememtos ', async() => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(10); 
        
    })
    
    
    
})
