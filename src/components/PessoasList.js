import React, { Component } from 'react';

class PessoasList extends Component {

    renderRow = (item, key) => {
        return <li key={key} className="list-group-item">{item.nome}</li>
    }

    render() {
        return (
            <div>
                <h2>Lista de pessoas</h2>
                <ul className="list-group">
                    {
                        this.props.items.map((item, key) => this.renderRow(item, key))
                    }
                </ul>
            </div>
        )
    }
}

export default PessoasList