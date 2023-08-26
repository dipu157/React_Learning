import React, { Component } from 'react'

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      }
    }

    handleIncrement = () => {
        this.setState({ 
            count: this.state.count + 1 
        })
    };

    handleDecrement = () => {
        this.setState({ 
            count: this.state.count - 1 
        })
    };

  render() {
    const { count } = this.state;
    return (
      <div className='body'>
        <h2>Count : {count}</h2>
        <button className='btn' onClick={this.handleIncrement}> + </button>
        <button className='btn' onClick={this.handleDecrement}> - </button>
      </div>
    )
  }
}
