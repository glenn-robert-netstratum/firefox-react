import SearchBar from "./Searchbar"

interface HeaderProps {
  search: string

  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >
}

function Header({search,setSearch,}: HeaderProps) {
  return (
    <div className="flex items-center justify-center pt-12 text-white">
      <div className="flex absolute left-5 top-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"
          alt="Firefox Logo"
          className="h-15 w-15 mb-20 "
        />

        <h1 className="text-4xl font-bold pt-3 pl-2 text-border cursor-default ">
          Firefox
        </h1>
      </div>
      <div>
        <SearchBar search={search}
          setSearch={setSearch}/>
      </div>
    </div>
  )
}

export default Header