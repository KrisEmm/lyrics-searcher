import React from 'react'

const Lyrics = ({ lyrics, song }) => {
    if (lyrics.length === 0) return null
    return (
        <>
            <h1>Letra de la canción</h1>
            <h2> "{song}" </h2>
            <p className='letra'>{lyrics}</p>
        </>
    )
}

export { Lyrics }

