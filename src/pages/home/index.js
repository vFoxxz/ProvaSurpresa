import { Link } from "react-router-dom"
import './index.scss'
export default function Index() {

    return(
        <main className="sim">
            <h1>Home</h1>

            <div>
                <Link to='/acai'>Açai</Link>
                <br/>
                <Link to='/signo'>Signo</Link>
                <br/>
                <Link to='/sorveteria'>Sorveteria</Link>
            </div>
        </main>
    )
}