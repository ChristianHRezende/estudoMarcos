import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Clica aqui"
        }
    }

    clicouNoBotao = () => {
        //this.setState({ name: "Clicou no botao" })
        let name = 'Aopa'
        console.log(name)
    }

    render() {
        return (
            <div>
                <h3>Botão Legal</h3>
                <button onClick={this.clicouNoBotao}>{this.state.name}</button>
            </div>
        )
    }
}

export default Button
