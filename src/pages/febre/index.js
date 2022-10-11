import { useEffect, useState } from 'react'
import './index.scss'
import{ CalcularTemp } from '../../services/index.js'

export default function Paradas(){
    const[temp, setTemp] = useState(0)
    const [resultado, setResultado] = useState(0)

    function CalcularTemperatura (){
        try {
            let resposta = CalcularTemp(temp)
            setResultado(resposta)
        }
         catch (err) {
            setResultado(err.message)            
        }
    }

    useEffect(() => {
        CalcularTemperatura()
    }, [temp])
    

    return(
        <main className='sim'>
            <h1> Temperatura </h1>

            <div>
            Insira sua temperatura <input type='number' min={0} value={temp} onChange={e => setTemp(e.target.value)} />
            </div>

            <div>
              {resultado}
            </div>
        </main>
    )
}   