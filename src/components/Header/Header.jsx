import logo from "../../assets/images/logo.svg"

import Navbar from "../Navbar/Navbar"

function Header() {
  return (
    <>
    <header className="header-wrap">
      <img src={logo} alt="logo kasa-platform" className="logo" />
      <Navbar />
    </header>
    
    
    </>
  )
}

export default Header