import { Link } from "react-router-dom"
import './index.scss'
export default function Index() {

    return(
        <main className="sim">
            <h1>Home</h1>

            <div className="div-home">
                <Link to='/cafe' className="botoes"> Café </Link>
                <Link to='/acai' className="botoes">Açai</Link>
                <Link to='/linha' className="botoes">Linha</Link>
                <Link to='/signo' className="botoes">Signo</Link>
                <Link to='/juros' className="botoes"> Juros </Link>
                <Link to='/contar' className="botoes">Contar</Link>
                <Link to='/salario' className="botoes"> Salário </Link>
                <Link to='/cinema' className="botoes"> Cinema </Link>
                <Link to='/paradas' className="botoes"> Paradas </Link>
                <Link to='/numero' className="botoes"> Números </Link>
                <Link to='/retangulo' className="botoes"> Retangulo </Link>
                <Link to='/sorveteria' className="botoes">Sorveteria</Link>
                <Link to='/orcamento' className="botoes"> Orçamento </Link>
                <Link to='/temperatura' className="botoes"> Temperatura </Link>
            </div>
        </main>
    )
}