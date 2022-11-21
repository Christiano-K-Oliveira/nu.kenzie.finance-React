import { FormularioFinanca } from "./components/form"
import { CabecalhoHome } from "./components/header"
import { SecaoLista } from "./components/lista"
import { useState } from 'react'
import { FullValue } from "./components/fullValue"



export const PaginaHome = ({ setPagina }) => {

    const [lista, setCard] = useState([])


    return (
        <>
            <CabecalhoHome setPagina={setPagina} />

            <main className="menu_home">
                <div className="container">
                    <div>
                    <FormularioFinanca lista={lista} setCard={setCard}/>
                    <FullValue lista={lista}/>
                    </div>

                    <SecaoLista lista={lista} setCard={setCard}/>
                </div>
            </main>
        </>
    )
}