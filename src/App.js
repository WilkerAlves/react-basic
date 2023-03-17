import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from "./components/List";

function App() {
  const name = "wilker"
  const url = 'https://via.placeholder.com/150'

  function sum(a, b) {
    return a + b
  }

  return (
    <div className="App">
        <h1>Olá React</h1>
        <p>Olá {name}</p>
        <p>Soma: {2 + 2}</p>
        <p>SomaFunction: {sum(1, 1)}</p>
        <img src={url} alt="minha imagem" />
        <HelloWorld />

        <SayMyName name="will" />
        <SayMyName name={name} />
        <Pessoa
        name={name}
        picture={url}
        age="28"
        ocupation="professor"
        />
        <List />
    </div>
  );
}

export default App;
