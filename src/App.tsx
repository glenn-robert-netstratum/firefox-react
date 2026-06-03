import { useEffect, useState } from "react"
import Header from "./components/Header"
import NewsGrid from "./components/NewsGrid"
import ShortcutGrid from "./components/ShortcutGrid"
import CustomTab from "./components/CustomTab"

function App() {
  const [search, setSearch]=useState("")
  const [wallpaperEnabled,setWallpaperEnabled] = useState(true)
  const [background,setBackground]=useState(
    localStorage.getItem("background") || "https://images.hdqwalls.com/download/land-rover-defender-octa-2025-pp-1366x768.jpg"
  )
  useEffect(()=>{
    localStorage.setItem("background",background)
  },[background])
  return (
    <div className="min-h-screen bg-center bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: wallpaperEnabled ? `url(${background})` : "none" }}>
      <Header search={search}
        setSearch={setSearch} />
      <ShortcutGrid />
      <NewsGrid search={search} />
      <CustomTab background={background}
      setBackground={setBackground}
      wallpaperEnabled={wallpaperEnabled}
      setWallpaperEnabled={setWallpaperEnabled}/>
    </div>
  )
}

export default App