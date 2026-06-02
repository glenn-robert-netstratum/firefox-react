import SearchBar from "./Searchbar"

interface HeaderProps {
  search: string

  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >
}

function Header({search,setSearch,}: HeaderProps) {
  return (
    <div className="flex items-center gap-2 p-4 text-white">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"
        alt="Firefox Logo"
        className="h-15 w-15 mb-20 "
      />

      <h1 className="text-4xl font-bold mb-20 ">
        Firefox
      </h1>
      <div className=" flex justify-center w-280 ">
        <SearchBar search={search}
          setSearch={setSearch}/>
      </div>
    </div>
  )
}

export default Header