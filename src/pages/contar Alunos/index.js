import { useEffect, useState } from 'react'
import './index.scss'
import{ ContarAlunos} from '../../services/index.js'

export default function Paradas(){
    const[alunos, setAlunos] = useState(0)
    const [resultado, setResultado] = useState([])
    const[media, setMedia] = useState([])
    const [resposta, setResposta] = useState(0)
    let array = []
    function CalcularAlunos (){
        try {
            let resposta = ContarAlunos(alunos)
            setResultado(resposta)
        }
         catch (err) {
            setResultado(err.message)            
        }
    }
    
    
    
    

    

    return(
        <main className='sim'>
            <h1> Alunos </h1>

            <div>
            Insira a quantidade de alunos <input type='number' min={0} value={alunos} onChange={e => setAlunos(e.target.value)} />
            </div>

            <div>
              <button onClick={CalcularAlunos}>Ok</button>
            </div>
            {resultado.map((item, pos) => 
                <div>
                    Aluno {item} <input value={media[pos]} type='text' onChange={e =>
                     array[pos] = Number(e.target.value)}/> 
                </div>
            )}   
            <button onClick={CalcularMedia}> Calcular </button>
            


            
            
        </main>
    )
}   