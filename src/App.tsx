import Header from "./components/Header"
import NewsGrid from "./components/NewsGrid"
import ShortcutGrid from "./components/ShortcutGrid"

function App() {
  return (
    <div className="min-h-screen bg-[url('https://images.hdqwalls.com/download/land-rover-defender-octa-2025-pp-1366x768.jpg')] bg-center bg-cover bg-no-repeat">
      <Header />
      <ShortcutGrid />
      <NewsGrid />
    </div>
  )
}

export default App