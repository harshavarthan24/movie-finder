import React, { useState } from "react";
import Search from "./components/search";
const App = () => {
  const [search, setSearch] = useState();
  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper">
        <header>
          <img src="./hero.png"/>
          <h1 className="font-dm-sans">Find <span className="text-gradient">Movies</span> you will enjoy without the hassle</h1>
        </header>
        <Search/>
      </div>
    </main>
  )
}

export default App
