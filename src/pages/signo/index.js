import { useEffect, useState } from "react"
import './index.scss'

export default function Index() {

    const [dia, setDia] = useState(0)
    const [mes, setMes] = useState('') 
    const [signo, setSigno] = useState('')

    useEffect(() =>{
        Calcular()
    }, [mes,dia]
)

    function Calcular(){
        if(dia>=23 && mes==="setembro" || dia <=22 && mes==="outubro"){
            setSigno("Sim")
        }
        else{
            setSigno("Não") 
        }
    }

    return(
        <main className="sim">
            <h1>Signo</h1>

            <div>Mês (somente texto) <input type='text' value={mes} onChange={e => setMes(e.target.value)} /></div>

            <div>Dia <input type='number' value={dia} onChange={e => setDia(Number(e.target.value))} /></div>

            <div> É de signo de libra ? {signo}</div>
        </main>
    )
}