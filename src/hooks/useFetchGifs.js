import { useState, useEffect } from 'react'
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (categoryName) => {

    const [categoryGifs, setCategoryGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCategoryGifs = async () => {
        const newCategoryGifs = await getGifs(categoryName);
        setCategoryGifs(newCategoryGifs);
        setIsLoading(false);
    }

    useEffect(() => {
        getCategoryGifs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return {
        categoryGifs,
        isLoading
    }
}
