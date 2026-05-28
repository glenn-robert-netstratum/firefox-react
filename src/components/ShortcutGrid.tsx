import { shortcuts } from "@/data/Shortcuts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

function ShortcutGrid() {
  return (
    <div className="mt-8 flex justify-center">

      <div className="flex gap-15">

        {shortcuts.map((shortcut) => (

          <Card
            key={shortcut.name}
            className="relative flex items-center justify-center h-20 w-20 border-none text-white hover:bg-black backdrop-blur-3xl backdrop-grayscale-30 transition cursor-pointer"
          >

            <CardContent className="absolute flex flex-col items-center gap-2">

              <img
                src={shortcut.image}
                alt={shortcut.name}
                className="h-8 w-8"
              />

              <p className="text-sm">
                {shortcut.name}
              </p>

            </CardContent>

          </Card>

        ))}

      </div>

    </div>
  )
}

export default ShortcutGrid