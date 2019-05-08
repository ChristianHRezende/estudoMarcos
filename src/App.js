import React, { Component } from 'react';
import './App.css';
import PessoasList from './components/PessoasList';
import Formulario from './components/Formulario';

import axios from 'axios'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: false,
      items: [
        { nome: "Marcos" },
        { nome: "Cesinha" },
        { nome: "Luizin" },
        { nome: "Chrizin" },
      ]
    }
  }

  componentDidMount() {
    this.loadList()
  }

  addToList = (item) => {
    const list = this.state.items
    list.push(item)
    this.setState({
      items: list
    })
  }

  onClickBotao = () => {
    this.setState({
      form: !this.state.form
    })
    console.log(this.state.form)
  }

  loadList = () => {
    axios.get('http://localhost:8080/pessoas',{'Content-Type':'application/json'}).then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App" >
        <div className='container'>
          <div>
            <button onClick={this.onClickBotao}>{this.state.form === true ? 'Voltar para lista' : 'Cadastrar'}</button>
          </div>
          {
            this.state.form ? <Formulario onClickCadastrar={this.addToList} />
              : <PessoasList items={this.state.items} />
          }
        </div>
      </div>
    );
  }
}

export default App;
