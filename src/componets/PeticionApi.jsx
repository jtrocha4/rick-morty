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
            <button onClick={obtenerPersonajes}>Obtener personajes</button>

            {
                personajes.map((results) => (
                    <div key={results.id}>
                        <h3>{results.id} {results.name}</h3>
                        <img src={results.image} alt="" height="250px" />
                        <ul>
                            <li>Status: {results.status}</li>
                            <li>Species: {results.species}</li>
                            <li>Gender: {results.gender}</li>
                            <li>Type: {results.type}</li>
                        </ul>
                    </div>
                ))
            }


        </div>
    )
}

export default PeticionApi