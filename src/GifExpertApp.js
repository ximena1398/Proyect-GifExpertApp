import React, { useState } from 'react';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        //debido a que mediante el useState se altera el estado del arreglo no se puede agregar de la siguiente manera 
        //porque el estado del arreglo pasaría a ser un String
        //setCategories('SNK');
        //1ra opción
        setCategories(['HunterXHunter', ...categories]);

        //2da opción
        setCategories(catgs => [...catgs, 'HunterXHunter']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </>
    )
}