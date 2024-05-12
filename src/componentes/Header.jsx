import { Link } from "react-router-dom";


export function Header(){
    return(
        
        <div className="flex justify-center p-6 items-center text-white">
            <ul className="flex space-x-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/game">Juego</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/registro">Registro</Link></li>
            </ul>
        </div>
    )
}