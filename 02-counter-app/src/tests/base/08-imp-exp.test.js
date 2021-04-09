import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de Heroes', () => {

    test('debe de retornar un Heroe por ID', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(heroe => heroe.id === id)

        expect(heroe).toEqual(heroeData)
    })

    test('debe de retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined)
    });

    test('debe de retornar un arreglo con los heroes de DC', () => {

        const _heroes = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },

            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ];
        const heroesExpected = getHeroesByOwner('DC');

        expect(_heroes).toEqual(heroesExpected);
    });

    test('debe de retornar un arreglo con los heroes de Marvel', () => {

        const heroes = getHeroesByOwner('Marvel');

        expect(heroes.length).toBe(2)
        
    })
    
    
    
})
