import { useState} from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log("Cadastrou o usuario")
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState('1234')

    return (
        <div>
            <h1> Meu Cadastro: </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form