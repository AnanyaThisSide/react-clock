import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 2}
        ]
     }
    render() { 
        return ( 
            <React.Fragment>
                {
                    this.state.counters.map(c => 
                        <Counter key={c.id} counter={c} onDelete={this.handleDelete}/>
                    )
                }

                <button className="btn btn-secondary m-3" onClick={this.handleReset}>Reset Values</button>
            </React.Fragment>
         );
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value=0;
            return c;
        })

        this.setState(counters);
    }

    handleDelete = id => {
        const counters = this.state.counters.filter(c => c.id != id);
        this.setState({counters})
    }
}
 
export default Counters;