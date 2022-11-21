import { useState } from 'react'
import NoCard from '../../imgs/NoCard.png'
import '../../style/list.css'
import { RenderCards } from '../cards'

export const SecaoLista = ({lista, setCard}) => {

    const [filterList, setFilterList] = useState('')

    function renderVazio() {
        return (
            <>
                <li>
                    <img src={NoCard} alt="" />
                </li>

                <li>
                    <img src={NoCard} alt="" />
                </li>

                <li>
                    <img src={NoCard} alt="" />
                </li>
            </>
        )
    }
    function renderFilter(event){
        return setFilterList(lista.filter((item) => item.type === event.target.innerText.slice(0, 7)))
    }
    function renderTodosFilter(){
        return setFilterList('')
    }

    return (
        <section className="secao_lista_financeira">
            <div className="resumo">
                <h2>Resumo Financeiro</h2>

                <div className="box_btns">
                    <button type="button" onClick={renderTodosFilter}>Todos</button>
                    <button type="button" onClick={renderFilter}>Entradas</button>
                    <button type="button" onClick={renderFilter}>Despesas</button>
                </div>
            </div>

            <div className='box_lista'>
                <h2>Você ainda não possui nenhum lançamento</h2>

                <ul>
                    {
                        lista.length === 0 ? renderVazio() : filterList !== '' ? <RenderCards list={filterList} setList={setFilterList}/> : <RenderCards list={ lista } setList= { setCard } /> 
                    }
                </ul>
            </div>
        </section>
    )
}



//Usar um componente de lista e a partira desse componente, realizar as funções e verificações 
//Só Inserir o valor no setCard criando uma função do evento que ele renderizará tudo automatico