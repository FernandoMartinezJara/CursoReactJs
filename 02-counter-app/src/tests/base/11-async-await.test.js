import { getImagen } from "../../base/11-async-await"

describe('', () => {

    test('debe de retornar url', async () => {

        const url = await getImagen();

        expect(typeof url).toBe('string')
        
    })
    
    
})
