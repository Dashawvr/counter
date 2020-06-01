import React, {Component} from 'react';


export default class Input extends Component{

    render() {
        return(
            <div>
                <form onSubmit={this.props.onClick}>
                     <input   type='number' name='input'/>
                     <button  type='submit'> Add </button>

                </form>
            </div>
        );
    }

}

