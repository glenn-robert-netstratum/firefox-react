import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { FaPencilAlt,FaTrash } from "react-icons/fa";
import { backgroundImage } from "@/data/BackgroundImage";
import { Switch } from "@/components/ui/switch";
import { useState,useEffect } from "react";

interface CustomTabProps {
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
  wallpaperEnabled: boolean;
  setWallpaperEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  shortcutEnabled: boolean;
  setShortcutEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  newsEnabled: boolean;
  setNewsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

function CustomTab({
  setBackground,
  wallpaperEnabled,
  setWallpaperEnabled,
  shortcutEnabled,
  setShortcutEnabled,
  newsEnabled,
  setNewsEnabled
}: CustomTabProps) {

  interface Wallpaper {
    id: number;
    url: string;
  }

    const [imageArray, setImageArray] = useState<Wallpaper[]>(() => {
  
      const storedImageArray =
        localStorage.getItem("Wallpaper")
  
      if (storedImageArray) {
        return JSON.parse(storedImageArray) as Wallpaper[]
      }
  
      localStorage.setItem(
        "Wallpaper",
        JSON.stringify(backgroundImage)
      )
  
      return backgroundImage
    })
  
    useEffect(() => {
  
      localStorage.setItem(
        "Wallpaper",
        JSON.stringify(imageArray)
      )
  
    }, [imageArray])

    function deleteWallpaper(id: number) {

      const updatedWallpapers =
        imageArray.filter(
          (wallpaper) =>
            wallpaper.id !== id
        )

      setImageArray(
        updatedWallpapers
      )

    }

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="flex items-center justify-center  fixed right-4 bottom-2 w-20 h-20 z-50">
          <button
            className="
                    bg-black
                        rounded-lg
                        p-4
                        w-13
                        h-13 
                        hover:scale-110
                        text-white
                        border-2
                        border-white
                        cursor-pointer
                    "
          >
            <FaPencilAlt className="edit-icon " />
          </button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-white/70">
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-4 ">
            <p className="text-xl">Wallpaper</p>
            <Switch
              id="wallpaper-toggle"
              checked={wallpaperEnabled}
              onCheckedChange={setWallpaperEnabled}
              className="cursor-pointer"
            />
          </div>
          <div className="  flex flex-wrap p-4 gap-3 border-b-2 border-black">
            {imageArray.map((wallpaper) => (
              <div className="flex">
                <button
                  key={wallpaper.id}
                  onClick={() => {
                    if (wallpaperEnabled) {
                      setBackground(wallpaper.url);
                    }
                  }}
                  className=" flex border-none hover:scale-105 hover:border-black h-17 bg-black rounded-lg overflow-hidden transition cursor-pointer"
                >
                  <img
                    src={wallpaper.url}
                    alt="Wallpaper"
                    className="h-17 w-27 "
                  />
                </button>
                <button
                  onClick={() =>
                    deleteWallpaper(
                      wallpaper.id
                    )
                  }
                  className="
                  flex
                  items-center
                  justify-center
                  absolute
                  mt-1
                    z-10
                    h-4
                    w-4
                    ml-22
                    rounded-full
                    hover:scale-125
                    text-white
                    hover:bg-black/70
                    cursor-pointer
                  "
                >
                  <FaTrash size={10} />
                </button>
              </div>
            ))}
            <label
              className=" flex border-2 border-black hover:scale-105 hover:bg-black/50 hover:text-white  rounded-lg overflow-hidden transition px-9.5 pb-3 text-black
                       text-5xl justify-center items-center cursor-pointer " >
                +
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (!file) return
                    const reader = new FileReader()
                    reader.onload = () => {
                      const base64 =
                        reader.result as string
                      const newWallpaper = {
                        id: Date.now(),
                        url: base64,
                      }
                      setImageArray((prev) => [
                        ...prev,
                        newWallpaper,
                      ])

                      setBackground(base64)
                    }

                    reader.readAsDataURL(file)
                    }}
                />
            </label>
          </div>
          <div className=" flex items-center justify-between p-4 border-b-2 border-black">
            <p className=" text-xl">Shortcuts</p>
            <Switch
              id="shortcut-toggle"
              checked={shortcutEnabled}
              onCheckedChange={setShortcutEnabled}
              className="cursor-pointer"
            />
          </div>
          <div className=" flex items-center justify-between p-4 border-b-2 border-black">
            <p className=" text-xl">News</p>
            <Switch
              id="news-toggle"
              checked={newsEnabled}
              onCheckedChange={setNewsEnabled}
              className="cursor-pointer"
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
export default CustomTab;
