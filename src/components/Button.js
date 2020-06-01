import React, {Component} from 'react';

export class Button extends Component {




    render() {
        const{subHundred,adderHundred,increment,decrement,reset} = this.props
        return (
            <div>
                <button onClick={subHundred} className='counter'>Sub 100</button>
                <button onClick={adderHundred} className='counter'>Add 100</button>
                <button onClick={increment} className='counter'>Add 1</button>
                <button onClick={decrement} className='counter'>Sub 1</button>
                <button onClick={reset}>RESET</button>
            </div>
        );
    }
}


