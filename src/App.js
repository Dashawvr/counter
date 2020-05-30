import React, {Component} from 'react';
import './App.css';


class App extends Component{
    state = {
        count: 0,
        inputText: ''
    };

    increment = ()=> {
        this.setState({count: this.state.count + 1});
    }

    decrement = ()=> {
        if (this.state.count <= 0){
            return 0
        }
        else {
            this.setState({count: this.state.count -1})
        }
    }

    adderHundred = ()=> {
        this.setState({count: this.state.count + 100})
    }

    subHundred = ()=> {
        if (this.state.count <= 0){
            return this.setState({
                count: 0
            })
        }
        this.setState({count: this.state.count -100})
    }

    onClick = (e) => {
     const adder = e.target.elements.input.value
        e.preventDefault();
     this.setState({count: this.state.count + parseInt(adder)});
    }
    reset = () => {
        this.setState({count: 0});
    }


render() {
    return (
        <div className="App">
            <button onClick={this.subHundred} className='counter'>Sub 100</button>
            <button onClick={this.adderHundred} className='counter'>Add 100</button>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment} className='counter'>Add 1</button>
            <button onClick={this.decrement} className='counter'>Sub 1</button>
            <form onSubmit={this.onClick}>
                <input type='number' name='input'/>
                <button type='submit'> add </button>
            </form>
            <button onClick={this.reset}>RESET</button>

        </div>
    );
}
}

export default App;
