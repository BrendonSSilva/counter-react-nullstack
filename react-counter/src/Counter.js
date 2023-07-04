import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <section>
        <h2>React - Contador Classes</h2>
        <p>Valor: {count}</p>
        <div className='buttons'>
          <button onClick={this.incrementCount}>Incrementar</button>
          <button onClick={this.decrementCount}>Decrementar</button>
        </div>
      </section>
    );
  }
}

export default Counter;