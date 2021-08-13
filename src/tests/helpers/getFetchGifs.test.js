import { getFetchGifs } from '../../helpers/getFetchGifs';

describe('Pruebas con getFetchGifs', () => {

    test('debe de traer 7 elementos', async() => {

        const gifs = await getFetchGifs('One Punch');

        expect(gifs.length).toBe(7);
    })

    test('debe de estar vacío', async() => {

        const gifs = await getFetchGifs('');

        expect(gifs.length).toBe(0);
    })
    
})