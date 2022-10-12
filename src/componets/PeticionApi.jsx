import React from 'react'

function PeticionApi() {

    const [personajes, setPersonajes] = React.useState([])

    const obtenerPersonajes = async () => {
        try {
            const res = await fetch("https://rickandmortyapi.com/api/character?page=1")
            const { results } = await res.json()
            setPersonajes(results)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='mb-4'>
                <button onClick={obtenerPersonajes}>Obtener personajes</button>
            </div>

            <div className="row">
                {
                    personajes.map((results) => (
                        <div className="col col-auto col-sm-4 col-md-3" key={results.id}>
                            <div className="card mb-3 mx-4">
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
    )
}

export default PeticionApi