
import { useState } from 'react'
import { InputAddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One PunchMan']);

    //newCategory se recibe desde componente hijo
    const handleAddCategory = (newCategory) => {
        //Si ya existe la categoria no se procede
        if (categories.includes(newCategory)) return;
        setCategories(categories => [newCategory, ...categories]);
    }


    return (
        <>

            <h1 >Gif Expert App</h1>

            <InputAddCategory
                onNewCategory={(returnedValue) => handleAddCategory(returnedValue)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        categoryName={category} />
                ))
            }

        </>
    );

}

