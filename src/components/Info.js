import React from 'react'

const Info = ({ info }) => {
    if (Object.keys(info).length === 0) return null
    return (
        <>
            <div className='card border-light'>
                <div className='card-header bg-primary text-light font-weight-bold'>
                    <h4>Información Artista: {info.strArtist}</h4>
                </div>
                <div className='card-body'>
                    <img src={info.strArtistThumb} alt="Foto Artista" />
                    {
                        info.strGenre
                            ? <h4><strong>Genero:</strong>{info.strGenre}</h4>
                            : null
                    }
                    <h2>Biografía:</h2>
                    <p>
                        {
                            info.strBiographyES
                                ? info.strBiographyES
                                : info.strBiographyEN
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export { Info }

