interface ModalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  setTitle: (value: string) => void;
  url: string;
  setUrl: (value: string) => void;
  image: string;
  setImage: (value: string) => void;
  onAdd: () => void;
}

function ModalOverlay({isOpen,onClose,title,setTitle,url,setUrl,image,setImage,onAdd}: ModalOverlayProps){
    if (!isOpen) return null;
    return(
    <div 
      className="fixed flex items-center justify-center z-50"
      onClick={onClose}
    >

        <div
        className="relative w-[600px] rounded-xl bg-white text-black"
        onClick={(e) => e.stopPropagation()}
        >


            <h1 className=" pt-2 pl-5 text-2xl font-bold">
                New Shortcut
            </h1>


            <div className="flex gap-6 p-6">

                <div className="flex-1 space-y-4">

                    <div>

                        <label className="mb-1 block text-sm font-medium">
                        Title
                        </label>

                        <input
                        type="text"
                        placeholder="Enter a title"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        className="w-full rounded-md border p-2"
                        />

                    </div>

                    <div>

                        <label className="mb-1 block text-sm font-medium">
                        URL
                        </label>

                        <input
                        type="text"
                        placeholder="Type or paste a URL"
                        value={url}
                        onChange={(e) =>
                            setUrl(e.target.value)
                        }
                        className="w-full rounded-md border p-2"
                        />

                    </div>

                    <div>

                        <label className="mb-1 block text-sm font-medium">
                            Image URL
                        </label>

                        <input
                        type="text"
                        placeholder="Type or paste a URL"
                        value={image}
                        onChange={(e) =>
                            setImage(e.target.value)
                        }
                        className="w-full rounded-md border p-2"
                        />

                    </div>

                </div>


            </div>

            <div className="flex justify-end gap-3 p-4">

                <button
                onClick={onClose}
                className="rounded-full border px-5"
                >
                Cancel
                </button>

                <button
                onClick={onAdd}
                className="rounded-full bg-violet-600 px-5 py-2 text-white"
                >
                Add
                </button>

            </div>

            </div>
    </div>
);}

export default ModalOverlay