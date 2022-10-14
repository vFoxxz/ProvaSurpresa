import { useEffect, useState } from 'react'
import './index.scss'
import{ CalcularParada, OrcamentoFamiliar } from '../../services/index.js'

export default function Paradas(){
    const[gastos, setGastos] = useState(0)
    const[ganhos, setGanhos] = useState(0)
    const[total, setTotal] = useState(0)

    function CalcularOrcamento (){
        try {
            const final = OrcamentoFamiliar(ganhos, gastos)
            setTotal(final)
        } catch (err) {
            setTotal(err.message)
        }
    }

    useEffect(() => {
        CalcularOrcamento()
    }, [ganhos, gastos])
    

    return(
        <main className='sim'>
            <h1>Orçamento</h1>
            <div>
                Ganhos <input type='number' min={0} value={ganhos} onChange={e => setGanhos(Number(e.target.value))} />
            </div>
            <div>
                Gastos <input type='number' min={0} value={gastos} onChange={e => setGastos(Number(e.target.value))} />
            </div>
            <div>
                {total}
            </div>
        </main>
    )
}   