import Nullstack from 'nullstack'

import Counter from './Counter'
import './Home.css'

class Home extends Nullstack {

  prepare({ project, page, greeting }) {
    page.title = `${project.name} - ${greeting}`
    page.description = `${project.name} was made with Nullstack`
  }

  render() {
    return (
      <section>
        <Counter />
      </section>
    )
  }

}

export default Home
