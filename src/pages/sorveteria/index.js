import { useState, useEffect } from "react"
import './index.scss'

export default function Index() {

    const [gramas, setGramas] = useState(0)
    const [resposta, setResposta] = useState(0)
    
    function calcularPrecoGrama(){
        let total = 0
        if(gramas >= 1000){
            total = (gramas / 100) * 3
            setResposta(total)
        }
        
        else if(gramas > 0) {
            total = (gramas / 100) * 3.50
            setResposta(total)
        }
        
    }
    useEffect(() =>{
        calcularPrecoGrama()
    }, [gramas]
)

    return(
        <main>
            <h1>Sorveteria</h1>
            <div>
            Valor Gramas  <input type='text' value={gramas} onChange={e => setGramas(Number(e.target.value))} />
            </div>

            <div>
                {gramas <= 0 &&
                <h1> Peso Inválido </h1>
                }
                {gramas != 0 &&
                <h1> O total a pagar é de R$ {resposta} </h1>
                }
            </div>
        </main>
    )
}