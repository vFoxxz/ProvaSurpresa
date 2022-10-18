import { useEffect, useState } from 'react'
import './index.scss'
import{ DesenharRetangulo } from '../../services/index.js'

export default function Paradas(){
    const[largura, setLargura] = useState(0)
    const[altura, setAltura] = useState(0)
    const[total, setTotal] = useState([])

    function CalcularNumeros (){
        try {
            const final = DesenharRetangulo(altura, largura)
            setTotal(final)
        } catch (err) {
            setTotal(err.message)
        }
    }

    
   
    

    return(
        <main className='sim'>
            <h1>Desenhar Retangulo</h1>
            <div>
                Base <input type='number' min={0} value={largura} onChange={e => setLargura(Number(e.target.value))} />
            </div>
            <div>
                Altura <input type='number' min={0} value={altura} onChange={e => setAltura(Number(e.target.value))} />
            </div>
            <div>
                <button onClick={CalcularNumeros}>Ok</button>
            </div>
            
            <div>
            {total}
            </div>
                
        </main>
    )
}   