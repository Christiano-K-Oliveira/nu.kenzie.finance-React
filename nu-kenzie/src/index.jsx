import Group262 from '../src/imgs/Group 262.png'

export  const PaginaDeInicio = ({ setPagina }) => {

    function trocarPagina() {
        return setPagina('paginaHome')
    }

    return (
        <main className='menu_inicio'>
            <section className="secao_inicio">
                <h1><strong>Nu</strong>Kenzie</h1>

                <p>Centralize o controle das suas finanças</p>
                <span>de forma rápida e segura</span>

                <button type="button" onClick={trocarPagina}>Iniciar</button>
            </section>
            
            <section className="secao_inicio_figure">
                <figure>
                    <img src={ Group262 } alt="" />
                </figure>
            </section>
        </main>
    )
}