import React from 'react'

function Paginacion({ next, prev, paginaSiguiente, paginaAnterior }) {

    const siguiente = () => {
        paginaSiguiente()
    }

    const anterior = () => {
        paginaAnterior()
    }

    return (
        <div>
            {
                prev ? (
                    <button onClick={anterior}>Anterior</button>
                ) : null
            }
            {
                next ? (
                    <button onClick={siguiente}>Siguiente</button>
                ) : null
            }
        </div>
    )
}

export default Paginacion