import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { FaPencilAlt } from "react-icons/fa";
import { backgroundImage } from "@/data/BackgroundImage";
import { Switch } from "@/components/ui/switch";

interface CustomTabProps {
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
  wallpaperEnabled: boolean;
  setWallpaperEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

function CustomTab({
  setBackground,
  wallpaperEnabled,
  setWallpaperEnabled,
}: CustomTabProps) {
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
                    "
          >
            <FaPencilAlt className="edit-icon " />
          </button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-white/50">
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-4 ">
            <p className="text-xl">Wallpaper</p>
            <Switch
              id="wallpaper-toggle"
              checked={wallpaperEnabled}
              onCheckedChange={setWallpaperEnabled}
            
            />
          </div>
          <div className="  flex flex-wrap p-4 gap-3 border-b-2">
            {backgroundImage.map((wallpaper) => (
              <button
                key={wallpaper.id}
                onClick={() => {
                  if (wallpaperEnabled) {
                    setBackground(wallpaper.url);
                  }
                }}
                className="
                                        flex
                                        border-none
                                        hover:scale-105
                                        hover:border-black
                                        h-17
                                        bg-black
                                        rounded-lg
                                        overflow-hidden
                                        transition
                                        
                                    "
              >
                <img
                  src={wallpaper.url}
                  alt="Wallpaper"
                  className="
                                        h-17 w-27
                                    "
                />
              </button>
            ))}
            <div
              className="
                                        flex
                                        border-none
                                        hover:scale-105
                                        hover:border-black
                                        h-17
                                        bg-black
                                        rounded-lg
                                        overflow-hidden
                                        transition
                                        px-9.5
                                        text-white
                                        text-5xl
                                        
                                    "
            >
              +
            </div>
          </div>
          <div className=" flex items-center justify-between p-4">
            <p className=" text-xl">Shortcuts</p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
export default CustomTab;
