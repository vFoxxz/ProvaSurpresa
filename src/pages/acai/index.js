import { useEffect, useState } from "react"
import './index.scss'

export default function Index() {


    
    const [qtdP, setQtdP] = useState(0)
    const [qtdM, setQtdM] = useState(0) 
    const [qtdG, setQtdG] = useState(0)

    const [desc, setDesc] = useState(0)
    const [total, setTotal] = useState(0)

    function Calcular() {
        let soma = qtdP * 13.50 + qtdM * 15 + qtdG * 17.50
        let resp = soma * desc / 100
        let final = soma - resp
        setTotal(final)
    }

    useEffect(() => {
        Calcular()
    }, [qtdP, qtdM, qtdG, desc])
    return(
        <main className="sim">
            <h1>Açai</h1>

            <div>
              Qtd Pequeno:  <input type='number' value={qtdP} onChange={e => setQtdP(Number(e.target.value))} />
            </div>
            <div>
              Qtd Médio:  <input type='number' value={qtdM} onChange={e => setQtdM(Number(e.target.value))} />
            </div>
            <div>
              Qtd Grande:  <input type='number' value={qtdG} onChange={e => setQtdG(Number(e.target.value))} />
            </div>
            <div>
              % Desconto <input type='number' value={desc} onChange={e => setDesc(Number(e.target.value))} />
            </div>
            <div>
                O total é R${total}
            </div>
        </main>
    )
}