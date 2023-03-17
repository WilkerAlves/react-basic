import './App.css';
import HelloWorld from './components/HelloWorld';

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
    </div>
  );
}

export default App;
