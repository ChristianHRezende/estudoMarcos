import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class Formulario extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            startDate: ''
        }
    }

    onNomeInputChange = (event) => {
        console.log(event.target.value)
        this.setState({
            nome: event.target.value
        })
    }
    onDateInputChange = (event) => {
        console.log(event)
        /*  this.setState({
             nome: event.target.value
         }) */
    }

    onClickConfirmButton = () => {
        const nome = this.state.nome
        if (!nome) {
            console.log("Errrooooow")
        } else {
            this.props.onClickCadastrar(
                {
                    nome
                }
            )
        }
    }

    render() {
        return (
            <div>
                Formulario
                <form>
                    <input id="nome" type='text' placeholder="Nome" value={this.state.nome} onChange={this.onNomeInputChange}></input>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.onDateInputChange}
                        dateFormat="MM/dd/yyyy h:mm aa"

                    />
                    <button type="button" onClick={this.onClickConfirmButton}>Confirmar</button>
                </form>
            </div>
        )
    }
}

export default Formulario

