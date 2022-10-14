import './index.scss'
import { Cinemas } from '../../services/index.js'
import { useEffect, useState } from 'react'

export default function Cinema() {
    const [inteiras, setInteiras] = useState(0)
    const [meia, setMeia] = useState(0)
    const [diaSemana, setDiaSemana] = useState('')
    const [nacional, setNacional] = useState(false)
    const[respostas, setRespostas] = useState('')

    function CalcularFilminho(){
        try {
            let resposta = Cinemas(inteiras,meia,diaSemana,nacional)
            setRespostas(resposta)
        } 
        
        catch (err) {
            setRespostas(err.message)
        }
    }

    useEffect(()=>{
        CalcularFilminho()
    },[inteiras,meia, diaSemana, nacional])

    return (
        <main className='sim'>
            <div>
                <h1> Cinema </h1>
            </div>

            <div>
                inteiras <input type='number' min={0} value={inteiras} onChange={e => setInteiras(Number(e.target.value))} />
            </div>
            <div>
                Meias  <input type='number' min={0} value={meia} onChange={e => setMeia(Number(e.target.value))} />
            </div>
            
            <div>
                <select value={diaSemana} onChange = {e => setDiaSemana(e.target.value)}> 
                <option>Segunda-feira</option>
                <option>Terça-feira</option>
                <option>Quarta-feira</option>
                <option>Quinta-feira</option>
                <option>Sexta-feira</option>
                
                </select>
            </div>

            <div>
                Nacional  <input type='checkbox' min={0} value={nacional} onChange={e => setNacional(e.target.checked)} />
            </div>

            <div>
                {respostas}
            </div>

        </main>
    )
}