import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch','samurai x', 'draogn ball'])

    /* let handleAdd = () => {
        //setCategories(['hunterxhunter', ...categories])
        setCategories( cats => ['hunterxhunter', ...cats])
    } */

    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

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