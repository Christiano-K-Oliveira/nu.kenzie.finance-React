import '../../style/campValue.css'

export const FullValue = ({lista}) => {
    
    function contValue() {
        let fullValueList = lista.reduce((initial, item) => {
            return item.type === 'Despesa' ? initial - +item.value : initial + +item.value
            // return initial + +item.value
        }, 0)
        
        return `$ ${fullValueList},00`
    }

    return (
        <div className='box_full_value'>
            <div>
                <h2>Valor total:</h2>
                <span>{contValue()}</span>
            </div>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}