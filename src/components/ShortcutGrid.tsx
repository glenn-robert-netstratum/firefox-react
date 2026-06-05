import { defaultShortcuts } from "@/data/Shortcuts"
import { useEffect, useState } from "react"
import ModalOverlay from "@/components//ModalOverlay"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Shortcut {
  id: number
  name: string
  image: string
  url: string
}

function ShortcutGrid() {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [image, setImage] = useState("")
  const [editingId, setEditingId] = useState<number | null>(null)
  const [activeDropdown,setActiveDropdown] = useState<number | null>(null)
  const [shortcuts, setShortcuts] = useState<Shortcut[]>(() => {

    const storedShortcuts =
      localStorage.getItem("shortcuts")

    if (storedShortcuts) {
      const parsedShortcuts = JSON.parse(storedShortcuts) as Shortcut[]
      if (parsedShortcuts.length > 0) {
        return parsedShortcuts
      }
    }

    localStorage.setItem(
      "shortcuts",
      JSON.stringify(defaultShortcuts)
    )

    return defaultShortcuts
  })

  useEffect(() => {

    localStorage.setItem(
      "shortcuts",
      JSON.stringify(shortcuts)
    )

  }, [shortcuts])

  function editShortcut(shortcut: Shortcut) {

    setTitle(shortcut.name)

    setUrl(shortcut.url)

    setImage(shortcut.image)

    setEditingId(shortcut.id)

    setShowModal(true)
  }

  function deleteShortcut(id: number) {

    const updatedShortcuts =
      shortcuts.filter(
        (shortcut) =>
          shortcut.id !== id
      )

    setShortcuts(updatedShortcuts)
  }
  
  function addShortcut() {
    if (editingId !== null) {
      const updatedShortcuts =
        shortcuts.map((shortcut) =>
          shortcut.id === editingId ? {
                ...shortcut,

                name: title,

                url,

                image,
              }
            : shortcut
        )

      setShortcuts(updatedShortcuts)
      setShowModal(false)

    } else {

      const newShortcut = {
        id: Date.now(),
        name: title,
        url,
        image:
          image ||
          "https://cdn-icons-png.flaticon.com/512/25/25694.png",
      }

      setShortcuts([
        ...shortcuts,
        newShortcut,
      ])

      setTitle("")
      setUrl("")
      setImage("")

      setShowModal(false)
    }
  }
  return (
    <div id="shortcut-grid" className="mt-15 flex justify-center">

      <div className="flex gap-15">

        {shortcuts.map((shortcut) => (

          <Card onClick={() => window.open(shortcut.url)}
            key={shortcut.id}
            className={`relative flex items-center justify-center h-20 w-20 border-none hover:scale-120 hover:bg-black hover:text-white bg-white/70 transition cursor-pointer
            ${
              activeDropdown ===
              shortcut.id ? "bg-black text-white scale-120" : ""
            }`}>

            <CardContent className="absolute flex flex-col items-center pt-2">

              <img
                src={shortcut.image}
                alt={shortcut.name}
                className="h-8 "
              />

              <p className="text-sm flex justify-center items-center">
                {shortcut.name}
              </p>

            </CardContent>
            <div className="absolute flex items-center justify-center right-1 pb-2 top-0 h-5 w-5"
            onClick={(e) => e.stopPropagation()}>

              <DropdownMenu 
              onOpenChange={(open) => {
                    if (open) {
                      setActiveDropdown(shortcut.id)
                    } else {
                      setActiveDropdown(null)
                    }
                  }}>

                <DropdownMenuTrigger>

                  <div className="flex h-8 w-8 items-center justify-center pr-2 text-xl font-bold ">
                    ...
                  </div>

                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-black text-white border-2 border-white">

                  <DropdownMenuItem className="hover:bg-zinc-700"
                   onClick={() => editShortcut(shortcut)}>
                    Edit
                  </DropdownMenuItem>

                  <DropdownMenuItem className="hover:bg-zinc-700" 
                  onClick={() => deleteShortcut(shortcut.id)}>
                    Delete
                  </DropdownMenuItem>

                </DropdownMenuContent>

              </DropdownMenu>

            </div>

          </Card>

        ))}
        <Card onClick={() => setShowModal(true)}
        className="relative flex items-center justify-center h-20 w-20 border-none hover:scale-120 hover:bg-black hover:text-white bg-white/70 transition cursor-pointer">
          <div className="text-4xl pb-1">+</div> 
        </Card>

      </div>

      <ModalOverlay 
        title={title}
        setTitle={setTitle}

        url={url}
        setUrl={setUrl}

        image={image}
        setImage={setImage}
        isOpen={showModal} 
        onClose={() => {
          setShowModal(false)
          setTitle("")
          setUrl("")
          setImage("")
        }}
        onAdd={addShortcut}
      />

    </div>
  )
}

export default ShortcutGrid