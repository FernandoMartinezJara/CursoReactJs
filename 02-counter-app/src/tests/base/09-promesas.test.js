import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {

    test('getHeroByIdAsync debe de retornar un heroes async', ( done ) => {
        const id = 1;

        getHeroeByIdAsync( 1 ).
            then(heroe => {
                
                expect(heroe).toBe(heroes[0])
                done();
            });
    });

    // test('debe de retornar un error si el heroe por id no existe', (done) => {
    //     const id = 10;
        
    //     getHeroeByIdAsync( 1 ).
    //     then(err =>{

    //     }).
    //     catch(err => {
            
    //         expect(err).toEqual('No se pudo encontrar el héroe')
    //         done();
    //     });

    // })
    
    

    
})