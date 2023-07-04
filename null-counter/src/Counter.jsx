import Nullstack from 'nullstack'

import './Counter.css'

class Counter extends Nullstack {

    count = 0

    increment() {
        this.count++
    }

    decrement() {
        this.count--
    }

    render() {
        return (
            <section>
                <h2>Nullstack</h2>
                {this.count}
                <div class="buttons">
                    <button onclick={this.increment}>Incrementar</button>
                    <button onclick={this.decrement}>Decrementar</button>
                </div>
            </section>
        )
    }

}

export default Counter
