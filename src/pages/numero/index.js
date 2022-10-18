import { useEffect, useState } from 'react'
import './index.scss'
import{ Contar } from '../../services/index.js'

export default function Paradas(){
    const[inicio, setInicio] = useState(0)
    const[fim, setFim] = useState(0)
    const[total, setTotal] = useState([])

    function CalcularNumeros (){
        try {
            const final = Contar(inicio, fim)
            setTotal(final)
        } catch (err) {
            setTotal(err.message)
        }
    }

    
   
    

    return(
        <main className='sim'>
            <h1>Contar até o fim</h1>
            <div>
                Início <input type='number' min={0} value={inicio} onChange={e => setInicio(Number(e.target.value))} />
            </div>
            <div>
                Fim <input type='number' min={0} value={fim} onChange={e => setFim(Number(e.target.value))} />
            </div>
            <div>
                <button onClick={CalcularNumeros}>Ok</button>
            </div>
            {total.map(item =>
            <div>
            {item}
            </div>
                )}
        </main>
    )
}   