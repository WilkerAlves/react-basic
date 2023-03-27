import './App.css';
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from "./components/List";
// import Evento from "./components/Evento";
// import Form from "./components/Form";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


function App() {
  // const name = "wilker"
  // const url = 'https://via.placeholder.com/150'
  //
  // function sum(a, b) {
  //   return a + b
  // }

  return (
      <Router>
          <Navbar />
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>

              <Route path="/empresa">
                  <Empresa />
              </Route>

              <Route path="/contato">
                  <Contato />
              </Route>

          </Switch>
          <Footer />
      </Router>


    // <div className="App">
    //     <h1>Olá React</h1>
    //     <p>Olá {name}</p>
    //     <p>Soma: {2 + 2}</p>
    //     <p>SomaFunction: {sum(1, 1)}</p>
    //     <img src={url} alt="minha imagem" />
    //     <HelloWorld />
    //
    //     <SayMyName name="will" />
    //     <SayMyName name={name} />
    //     <Pessoa
    //     name={name}
    //     picture={url}
    //     age="28"
    //     ocupation="professor"
    //     />
    //     <List />
    //     <Evento numero={1}/>
    //     <Evento numero={2}/>
    //     <Form/>
    // </div>
  );
}

export default App;
