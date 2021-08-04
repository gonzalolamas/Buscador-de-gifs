import { useEffect, useState } from "react"
import { getFetchGifs } from '../helpers/getFetchGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        getFetchGifs(category)
            .then(imgs => {

                setTimeout(() => {
                    
                    console.log(imgs)
                    setState({
                        data: imgs,
                        loading: false
                    })
                }, 3000)

            })

    }, [category])

    return state; // {data: [], loading: true}
}
