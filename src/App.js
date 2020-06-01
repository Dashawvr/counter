import React, {Component} from 'react';
import './App.css';
import {Button}  from './components/Button';
import Input from './components/Input'


class App extends Component{
    state = {
        count: 0
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
        if (this.state.count - 100 <= 0 ){
            return this.setState({count: this.state.count})
        }else {
            this.setState({count: this.state.count - 100})
        }
    }



    reset = () => {
        this.setState({count: 0});
    }

    onClick = (e) => {
        const adder = e.target.elements.input.value
        e.preventDefault();
        if(parseInt(adder) > 0){
            this.setState({count: this.state.count + parseInt(adder)});
        }

    }


    render() {

        return (
            <div className="App">
                <Button
                    subHundred={this.subHundred}
                    adderHundred={this.adderHundred}
                    increment={this.increment}
                    decrement={this.decrement}
                    reset={this.reset} />
                <h1>{this.state.count}</h1>
                <Input onClick={this.onClick}/>
            </div>
        );
    }
}

export default App;
