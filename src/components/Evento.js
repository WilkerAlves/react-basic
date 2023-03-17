function Evento({numero}) {
    function meuEvento() {
        console.log(`pa fui ativado ${numero}`)
    }

    return (
        <div>
            <p> Clique para dispara um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento