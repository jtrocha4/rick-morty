import React, { useEffect, useState } from 'react'
import Paginacion from './Paginacion'


function PeticionApi() {

    const [personajes, setPersonajes] = React.useState([])
    const [info, setInfo] = React.useState({})

    const url = "https://rickandmortyapi.com/api/character"

    const obtenerPersonajes = async (url) => {
        try {
            const res = await fetch(`${url}`)
            const { info, results } = await res.json()
            setPersonajes(results)
            setInfo(info)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerPersonajes(url)
    }, [])

    const paginaSiguiente = () => {
        obtenerPersonajes(info.next)
    }

    const paginaAnterior = () => {
        obtenerPersonajes(info.prev)
    }


    return (
        <div>
            <div>
                <Paginacion prev={info.prev} next={info.next} paginaSiguiente={paginaSiguiente} paginaAnterior={paginaAnterior}></Paginacion>
            </div>

            <div className="container mt-3">
                <div className="row">
                    {
                        personajes.map((results) => (
                            <div className="col col-auto col-sm-4 col-md-2" key={results.id}>
                                <div className="card mb-3">
                                    <img className='card-img-top' src={results.image} height="200px"></img>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{results.id}- {results.name}</h5>
                                        <ul className='card-text list-unstyled'>
                                            <li>Status: {results.status}</li>
                                            <li>Species: {results.species}</li>
                                            <li>Gender: {results.gender}</li>
                                            <li>Type: {results.type}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default PeticionApi