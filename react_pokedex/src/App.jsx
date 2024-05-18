import { Aside } from "./components/Aside"
import { Pokemon } from "./components/Pokemon"

function App() {

  return (
    <section>
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] h-screen font-outfit">
        <Pokemon />
        <Aside />
      </main>
    </section>
  )
}

export default App
