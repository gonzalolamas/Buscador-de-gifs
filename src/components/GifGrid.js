import React from 'react'

export const GifGrid = ({category}) => {

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?limit=10&q=Rick&api_key=n1J096fYI33EKAhpV0O7SkGMHMzDoHCj'
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized.url
            }
        })

        console.log(gifs)

    }

    getGifs()

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
