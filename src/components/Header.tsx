function Header() {
  return (
    <div className="flex items-center gap-2 p-4 text-white">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"
        alt="Firefox Logo"
        className="h-8 w-8"
      />

      <h1 className="text-xl font-bold">
        Firefox
      </h1>
    </div>
  )
}

export default Header