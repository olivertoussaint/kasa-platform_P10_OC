import logo from "../../assets/images/footer-logo.svg"

function Footer() {
  return (
    <footer className="footer-container">
      <img src={logo} alt="logo de kasa platform" />
      <p className="footer-container__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer