import { IoMdTrash } from 'react-icons/io';

export const RenderCards = ({ list, setList }) => {

     function deletar(index) {
 
        setList(list.filter((item, i) => i !== index))
    }

    return (
        list.map((card, index) => {
            return (
                <li key={index} style={card.type === 'Entrada' ? {borderLeft: '5px solid var(--green-100)'} : {borderLeft: '5px solid var(--grey-2)'}}>
                    <div className='box_1'>
                        <h3>{ card.description }</h3>
                        <span>{ card.type }</span>
                    </div>

                    <div className='box_2'>
                        <span>{ `R$ ${card.value},00` }</span>
                        <button onClick={() => deletar(index)}><IoMdTrash /></button>
                    </div>
                </li>
            )
        })
    )
}

//Falta apagar corretamenta da list