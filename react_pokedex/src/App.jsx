import { Aside } from "./components/Aside"
import { Pokemon } from "./components/Pokemon"

function App() {

  return (
    <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemon />
        <Aside />
      </main>
    </section>
  )
}

export default App
