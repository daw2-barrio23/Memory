export function Header(){
    return(
        <div className="mx-auto p-3 items-center bg-gray-800 text-white">
            <nav className="flex justify-center">
                <ul className="flex space-x-4 color-white">
                    <li><a className="border rounded p4 shadow" href="/">Home</a></li>
                    <li><a className="border rounded p4 shadow" href="/">Juego</a></li>
                    <li><a className="border rounded p4 shadow" href="/">A cerca de</a></li>
                    
                </ul>
            </nav>
        </div>
    )
}