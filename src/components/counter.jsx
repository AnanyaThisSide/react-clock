import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.counter.value,
        imageUrl: "https://picsum.photos/200",
        tags: ['tag1', 'tag2', 'tag3']
    }

    // using arrow function to access 'this'
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() { 
        return (
            <div className="my-3">
                {/* <img src={this.state.imageUrl} alt=""/>
                {this.formatCount()}
                {this.state.tags.length === 0 ? <p>There is no tag!</p> :
                    (<ul>
                        { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
                    </ul>)
                } */}
                {this.formatCount()}
                <button onClick={(e) => this.handleClick(e,'INC')} className={"btn btn-sm mx-2 " + (this.state.value === 0 ? "btn-warning" : "btn-secondary")} >Increment</button>
                <button onClick={(e) => this.handleClick(e,'DEC')} className={"btn btn-sm mx-2 " + (this.state.value === 0 ? "btn-warning" : "btn-secondary")} >Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-sm mx-2 btn-secondary">Delete</button>
            </div>
        );
    }

    handleClick(event, action) {
        if(action === 'INC')
            this.setState({value: ++this.state.value})
        if(action === 'DEC')
            this.setState({value: --this.state.value})
    }

    formatCount() {
        const {value} = this.state;
        return <span>{value === 0 ? 'Zero' : value}</span>;
    }
}
 
export default Counter;