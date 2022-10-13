import React from 'react'

function Paginacion({ next, prev, paginaSiguiente, paginaAnterior }) {

    const siguiente = () => {
        paginaSiguiente()
    }

    const anterior = () => {
        paginaAnterior()
    }

    return (
        <div className='text-center'>
            <div className='btn-group' role="group">
                {
                    prev ? (
                        <button className='btn btn-dark' onClick={anterior}>Anterior</button>
                    ) : null
                }
                {
                    next ? (
                        <button className='btn btn-dark' onClick={siguiente}>Siguiente</button>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Paginacion