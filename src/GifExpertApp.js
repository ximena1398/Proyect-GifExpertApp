//Componente padre
import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //debido a que mediante el useState se altera el estado del arreglo no se puede agregar de la siguiente manera 
    //     //porque el estado del arreglo pasaría a ser un String
    //     //setCategories('SNK');
    //     //1ra opción
    //     //setCategories(['HunterXHunter', ...categories]);

    //     //2da opción
    //     setCategories(catgs => [...catgs, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}