import { useState } from 'react'
import '../../style/form.css'

export const FormularioFinanca = ({lista, setCard}) => {

    const [info, setInfo] = useState(
        {
            description: '',
            value: '',
            type: ''
        }
    )

    function stopForm(event){
        event.preventDefault()

        info !== {description: '', value: '', type: ''} ? setCard([...lista, info]) : alert('Preencha os campos corretamente!')

        setInfo({
            description: '',
            value: '',
            type: ''
        })
    }

    return (
        <section className="secao_formulario">
            <form onSubmit={stopForm}>
                <label htmlFor="input-descricao">Descrição</label>
                <input type="text" placeholder="Digite aqui sua descrição" id="input-descricao" onChange={(event) => setInfo({...info, description: event.target.value})} value={info.description}/>
                <span>Ex: Compra de roupas</span>

                <div>
                    <div className="box_value">
                        <label htmlFor="input-value">Valor</label>

                        <div>
                            <input type="number" id="input-value" onChange={(event) => setInfo({...info, value: event.target.value})} value={info.value}/>
                            <span>R$</span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="input-type">Tipo de valor</label>

                        <select name="TipoValue" id="select-value" onChange={(event) => setInfo({...info, type: event.target.value})} value={info.type}>
                            <option value="vazio"></option>
                            <option value="Entrada">Entrada</option>
                            <option value="Despesa">Despesa</option>
                        </select>

                    </div>
                </div>

                <button type="submit">Inserir valor</button>
            </form>
        </section>
    )
}