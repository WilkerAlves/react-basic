function Pessoa({name, picture, age, ocupation}) {
    return (
        <div>
            <img src={picture} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {ocupation}</p>
        </div>
    )
}

export default Pessoa