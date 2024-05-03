export function Header(){
    return(
        
        <div className="flex justify-center p-6 items-center text-white">
            <ul className="flex space-x-4">
                    <li><a className="border rounded p-3 shadow" href="/">Home</a></li>
                    <li><a className="border rounded p-3 shadow" href="/">Pokemons Memory</a></li>
                    <li><a className="border rounded p-3 shadow" href="/">Marvel Memory</a></li>
                    <li><a className="border rounded p-3 shadow" href="/">A cerca de</a></li>        
            </ul>
        </div>
    )
}