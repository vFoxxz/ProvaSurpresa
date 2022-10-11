import { useEffect, useState } from 'react'
import './index.scss'
import{ CalcularParada } from '../../services/index.js'

export default function Paradas(){
    const[capac, setCapac] = useState(0)
    const[consumo, setConsumo] = useState(0)
    const[dist, setDist] = useState(0)
    const [paradas, setParadas] = useState(0)

    function CalcularParadas (){
        try {
            let resposta = CalcularParada(capac, consumo, dist)
            setParadas(resposta)
        }
         catch (err) {
            setParadas(err.message)            
        }
    }

    useEffect(() => {
        CalcularParadas()
    }, [capac, consumo, dist])
    

    return(
        <main className='sim'>
            <h1> Paradas </h1>

            <div>
            Capacidade do tanque <input type='number' min={0} value={capac} onChange={e => setCapac(e.target.value)} />
            </div>
            <div>
            Consumo de gasolina <input type="number" min={0} value={consumo} onChange={e => setConsumo(e.target.value)} />
            </div>
            <div>
            Distância <input type="number" min={0} value={dist} onChange={e => setDist(e.target.value)} />
            </div>

            <div>
              {paradas}
            </div>
        </main>
    )
}   