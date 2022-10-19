import { useEffect, useState } from 'react'
import './index.scss'
import{ DesenharRetangulo, DesenharBolinha, DesenharFoto } from '../../services/index.js'

export default function Paradas(){
    const[largura, setLargura] = useState(0)
    const[altura, setAltura] = useState(0)
    const[total, setTotal] = useState([])
    const[bolinha,setBolinha] = useState([])
    const[imagem, setImagem] = useState([])

    function CalcularNumeros (){
        try {
            const final = DesenharRetangulo(largura, altura)
            setTotal(final)
            const bolinhas = DesenharBolinha(largura,altura) 
            setBolinha(bolinhas)
            const fotos = DesenharFoto(largura,altura)
            setImagem(fotos)
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
            {total.map(item =>
            
            <div>
                {item}
            </div>
                
            )}

            {bolinha.map(item =>
                <div>
                    {item}
                </div>
                
                )}
            </div>

            {imagem.map(item=>
                
                <div>
                    {item}
                </div>
            
            )}
                
            

        </main>
    )
}   