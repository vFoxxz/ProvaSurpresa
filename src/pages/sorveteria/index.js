import { useState, useEffect } from "react"
import { calcularPrecoGrama } from "../../services"
import './index.scss'

export default function Index() {

    const [gramas, setGramas] = useState(0)
    const [resposta, setResposta] = useState(0)
    
    function Calcular(){
        try {
            let final = calcularPrecoGrama (gramas)
            setResposta(final)    
        } 
        
        catch (err) {
            setResposta(err.message)            
        }       
        
    }
    useEffect(() =>{
        Calcular()
    }, [gramas]
)

    return(
        <main className="sim">
            <h1>Sorveteria</h1>
            <div>
            Valor Gramas  <input type='number' value={gramas} onChange={e => setGramas(Number(e.target.value))} />
            </div>

            <div>
                {gramas <= 0 &&
                <p> Peso Inválido </p>
                }
                {gramas != 0 &&
                <p> O total a pagar é de R$ {resposta} </p>
                }
            </div>
        </main>
    )
}