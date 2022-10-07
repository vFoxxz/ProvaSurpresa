import { useEffect, useState } from "react"
import './index.scss'
import { CalcularSigno } from '../../services'

export default function Index() {

    const [dia, setDia] = useState(0)
    const [mes, setMes] = useState('') 
    const [signo, setSigno] = useState('')

    useEffect(() =>{
        Calcular()
    }, [mes,dia]
)

    function Calcular(){
        let resp = CalcularSigno(dia.toFixed([0]), mes)
        setSigno(resp)
    }

    return(
        <main className="sim">
            <h1>Signo</h1>

            <div>Mês (somente texto) <input type='text' value={mes} onChange={e => setMes(e.target.value)} /></div>

            <div>Dia <input type='number' min="1" max="31" value={dia} onChange={e => setDia(Number(e.target.value))} /></div>

            <div> É de signo de libra ? {signo}</div>
        </main>
    )
}