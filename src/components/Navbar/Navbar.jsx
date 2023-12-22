import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <ul>
            <li>
                  <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
                  <NavLink to="/about">A Propos</NavLink> 
            </li>
      </ul>
    </nav>
  )
}

export default Navbar