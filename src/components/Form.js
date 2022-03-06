import React, { useEffect, useState } from 'react';

const Form = ({ setSearch, isLoading }) => {
    const [error, setError] = useState(true)
    const [info, setInfo] = useState({
        artist: '',
        song: ''
    })
    const { artist, song } = info
    const handleSubmit = (e) => {
        e.preventDefault();
        if (artist.trim() === '' || song.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        setSearch(info)
    }
    const handleChange = (e) => {
        if (e.target.value.trim() === '') setError(true)
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (isLoading) return
        const reset = () => {
            setInfo({
                artist: '',
                song: ''
            })
            setError(true)
        }
        reset()
    }, [isLoading])
    return (
        <>
            <div className='bg-info'>
                <div className='container'>
                    <div className='row'>
                        <form onSubmit={handleSubmit}
                            className='col card text-white bg-transparent mb-5 pt-5 pb-2'>
                            <fieldset>
                                <legend className='text-center'>
                                    Buscador de letras de tu Canciones
                                </legend>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label>Artista</label>
                                            <input
                                                type="text"
                                                className='form-control'
                                                placeholder='Nombre del Artista'
                                                name='artist'
                                                onChange={handleChange}
                                                value={artist}
                                            />
                                            {
                                                error && artist.trim() === ''
                                                    ? < small >* Campo Obligatorio</small>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label>Canción</label>
                                            <input
                                                type="text"
                                                className='form-control'
                                                placeholder='Nombre de la Canción'
                                                name='song'
                                                onChange={handleChange}
                                                value={song}

                                            />
                                            {
                                                error && song.trim() === ''
                                                    ? < small >* Campo Obligatorio</small>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    className='btn btn-primary float-right'
                                >
                                    Buscar
                                </button>
                                {
                                    isLoading
                                        ? (
                                            <div>
                                                <h4>Buscando, Espere por favor...</h4>
                                            </div>
                                        )
                                        : null
                                }
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
