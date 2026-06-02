import { useState } from "react"
import Header from "./components/Header"
import NewsGrid from "./components/NewsGrid"
import ShortcutGrid from "./components/ShortcutGrid"

function App() {
  const [search, setSearch]=useState("")
  return (
    <div className="min-h-screen bg-[url('https://images.hdqwalls.com/download/land-rover-defender-octa-2025-pp-1366x768.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
      <Header search={search}
        setSearch={setSearch} />
      <ShortcutGrid />
      <NewsGrid search={search} />
    </div>
  )
}

export default App