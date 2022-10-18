import { useEffect, useState } from 'react'
import './index.scss'
import{ DesenharLinha } from '../../services/index.js'

export default function Paradas(){
    const[qtd, setQtd] = useState(0)
    const[total, setTotal] = useState([])

    function Desenho (){
        try {
            const final = DesenharLinha(qtd)
            setTotal(final)
        } catch (err) {
            setTotal(err.message)
        }
    }

    useEffect(() => {
        Desenho()
    }, [qtd])
   
    

    return(
        <main className='sim'>
            <h1>Desenhar linha</h1>
            <div>
                Tamanho <input type='number' min={0} value={qtd} onChange={e => setQtd(Number(e.target.value))} />
            </div>
            
            <div>
            {total}
            </div>
        </main>
    )
}   