import { useEffect, useState } from "react"
import './index.scss'
import { CalcularAcai } from "../../services"

export default function Acai() {
    
    const [qtdP, setQtdP] = useState(0)
    const [qtdM, setQtdM] = useState(0) 
    const [qtdG, setQtdG] = useState(0)

    const [desc, setDesc] = useState(0)
    const [total, setTotal] = useState(0)

    function Calcular() {

      try {
        let final = CalcularAcai(qtdP, qtdM, qtdG, desc)
        setTotal('O total é R$' + final.toFixed([2]))
      } catch (err) {
        setTotal(err.message)
      }
        
    }
    useEffect(() =>{
      Calcular()
  }, [qtdP, qtdM, qtdG])

    return(
        <main className="sim">
            <h1>Açai</h1>

            <div>
              Qtd Pequeno:  <input type='number'  value={qtdP} onChange={e => setQtdP(Number(e.target.value))} />
            </div>
            <div>
              Qtd Médio:  <input type='number'  value={qtdM} onChange={e => setQtdM(Number(e.target.value))} />
            </div>
            <div>
              Qtd Grande:  <input type='number'  value={qtdG} onChange={e => setQtdG(Number(e.target.value))} />
            </div>
            <div>
              % Desconto <input type='number'  value={desc} onChange={e => setDesc(Number(e.target.value))} />
            </div>
            <div>
                {total}
            </div>
            <div>
              <img src='/assets/images/copo-de-acai.png' />h
              a
            </div>
        </main>
    )
}