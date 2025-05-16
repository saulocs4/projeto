import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-[#242e56]">
    <h1 className="font-bold text-2xl">Livraria GT</h1>
    <form className="form-header">
        <input type="text" id="searchInput" className="bg-white text-black pl-3"/>
        <button id="searchButton" className="bg-white h-10 flex"><i className="text-black fa-solid fa-magnifying-glass"></i></button>
    </form>
    <nav className="nav-header">
        <ul className="lista-links">
            <li>Home</li>
            <li>Categorias</li>
        </ul>
        <ul>
            <li>
              <FaCartShopping/>
            </li>
            <li className="lista-icone">
              <FaBars/>
            </li>
        </ul>
    </nav>
</header>
  )
}

export default Header