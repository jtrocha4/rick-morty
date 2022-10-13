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
            console.log(info)
            console.log(results)
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
                            <div className="col col-auto col-sm-4 col-md-3" key={results.id}>
                                <div className="card text-bg-dark mb-3">
                                    <img className='card-img-top' src={results.image} height="200px"></img>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{results.name}</h5>
                                        <ul className='card-text list-unstyled'>
                                            <li>
                                                <i className="bi bi-activity"> {results.status} </i>
                                                - {results.species}
                                            </li>
                                            <li><i className="bi bi-geo"> {results.origin.name}</i></li>
                                            <li> {results.gender === "Male" ?
                                                (<i className="bi bi-gender-male"> Male</i>): (<i className="bi bi-gender-female"> Female</i>)} </li>
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