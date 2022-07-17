import React  from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            value: 0
        }

        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }

    handlePlus() {
        this.setState({value: this.state.value +1});
    }
    handleMinus() {
        if(this.state.value > 0) {
        this.setState({value: this.state.value -1});
        }
    }

    render() {
        return(
            <div>
                <h1>Komponen ini dibuat menggunakan ClassComponent</h1>
                <h2>Hallo {this.props.nama}</h2>
                <button>-</button>
                <span>{' '} {this.state.value} {' '}</span>
                <button onClick={ this.handlePlus}>+</button>
            </div>
        )
    }
}

export default ClassComponent;