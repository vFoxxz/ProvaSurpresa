import { useEffect, useState } from 'react'
import './index.scss'
import{ CalcularSalario } from '../../services/index.js'

export default function Salario(){
    const[salarioBase, setSalarioBase] = useState(0)
    const[bonus, setBonus] = useState(0)
    const[desconto, setDesconto] = useState(0)
    const [total, setTotal] = useState(0)

    function CalcularSalarios (){
        try {
            let respostas = CalcularSalario(salarioBase, bonus, desconto)
            setTotal('Seu salário líquido é de R$' + respostas)

        }
         catch (err) {
            setTotal(err.message)            
        }
    }

    return(
        <main>
            <h1> teste </h1>

            <div>
            Salário base <input type='number' min={0} value={salarioBase} onChange={e => setSalarioBase(e.target.value)} />
            </div>
            <div>
             % Bonus mensal <input type="number" min={0} value={bonus} onChange={e => setBonus(e.target.value)} />
            </div>
            <div>
             desconto em R$ <input type="number" min={0} value={desconto} onChange={e => setDesconto(e.target.value)} />
            </div>

            <div>
               <button onClick={CalcularSalarios}> Salário </button> {total}
            </div>
        </main>
    )
}   