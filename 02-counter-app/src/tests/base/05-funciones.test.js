import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () =>{

    test('getUser debe de retornar un objecto', () =>{

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
    
        const result = getUser();
    
        expect(result).toEqual(userTest);

    });

    test('getUsuarioActivo debe de retornar un objeto', () =>{

        const username = 'Fernando';
        const userTest = {
            uid: 'ABC567',
            username
        }
    
        const result = getUsuarioActivo(username);
    
        expect(result).toEqual(userTest);

    });


})