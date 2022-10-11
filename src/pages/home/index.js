import { Link } from "react-router-dom"
import './index.scss'
export default function Index() {

    return(
        <main className="sim">
            <h1>Home</h1>

            <div className="div-home">
                <Link to='/acai' className="botoes">Açai</Link>
                <Link to='/signo' className="botoes">Signo</Link>
                <Link to='/salario' className="botoes"> Salario </Link>
                <Link to='/paradas' className="botoes"> Paradas </Link>
                <Link to='/sorveteria' className="botoes">Sorveteria</Link>
                <Link to='/temperatura' className="botoes"> Temperatura </Link>
            </div>
        </main>
    )
}