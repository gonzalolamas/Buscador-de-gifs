import { useState } from "react"

export const GifExpertApp = () => {

    /* const categories = ['one punch','samurai x', 'draogn ball'] */

    const [categories, setCategories] = useState(['one punch','samurai x', 'draogn ball'])

    let handleAdd = () => {
        //setCategories(['hunterxhunter', ...categories])
        setCategories( cats => ['hunterxhunter', ...cats])
    }

    return(
        <>
            <h2>Gif Expert App</h2>
            <hr></hr>

            <button onClick={handleAdd}>agregar</button>

            <ol>
            {
            categories.map( category => {
                return <li key={category}>{category} </li>
            })
            }
            </ol>
        </>
    )
}