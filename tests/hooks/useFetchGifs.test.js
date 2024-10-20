/* eslint-disable no-undef */
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe regresar el estado incial', () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { categoryGifs, isLoading } = result.current;

        expect(categoryGifs.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('debe retornar un arreglo de imagenes e isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.categoryGifs.length).toBeGreaterThan(0),
        );

        const { categoryGifs, isLoading } = result.current;

        expect(categoryGifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });
});