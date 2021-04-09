import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base/07-deses-arr'

describe('pruebas en destructuración', () => {
    
    test('debe de retornar un string y número', () => {
        
        const arr = retornaArreglo();
        const[letras, numeros] =retornaArreglo();

        expect(letras).toBe("ABC")
        expect(typeof letras).toBe('string')
        expect(numeros).toBe(123)
        expect(arr).toEqual(['ABC', 123]);

    })
    

})
