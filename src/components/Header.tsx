import SearchBar from "./Searchbar"

function Header() {
  return (
    <div className="flex items-center gap-2 p-4 text-white bg-red-500">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"
        alt="Firefox Logo"
        className="h-15 w-15"
      />

      <h1 className="text-4xl font-bold ">
        Firefox
      </h1>
      <div className=" flex w-5xl justify-center ">
        <SearchBar/>
      </div>
    </div>
  )
}

export default Header