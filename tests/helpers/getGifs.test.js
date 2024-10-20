import { getGifs } from "../../src/helpers/getGifs";
/* eslint-disable no-undef */


describe('Pruebas getGifs()', () => {

    const category = 'One Punch';

    test('debe retornar un arreglo de gifs', async () => {

        const gifs = await getGifs(category);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })

    });
});