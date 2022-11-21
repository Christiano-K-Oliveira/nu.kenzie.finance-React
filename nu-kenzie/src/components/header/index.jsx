import '../../style/header.css'

export const CabecalhoHome = ({ setPagina }) => {

    function trocarPagina() {
        return setPagina('paginaInicio')    
    }

    return (
        <header>
            <div className='container'>
                <h1><strong>Nu</strong>Kenzie</h1>
                <button type="button" onClick={ trocarPagina }>Inicio</button>
            </div>
        </header>
    )
}