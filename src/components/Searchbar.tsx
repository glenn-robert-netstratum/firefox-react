import { Input } from "./ui/input"

function SearchBar() {
  return (
    <div className="flex justify-center mt-4">
      <div className="w-full max-w-md flex gap-4 bg-zinc-700 items-center justify-center p-2 rounded-2xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google Logo"
          className="h-5 w-auto"
        />
        
        <Input
          placeholder="Search with Google or enter address"
          className="bg-zinc-700 border-zinc-700 text-white placeholder:text-zinc-400"
        />
      </div>
    </div>
  )
}

export default SearchBar