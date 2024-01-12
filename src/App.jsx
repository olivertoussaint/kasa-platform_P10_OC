import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ChambersSheet from './pages/Chambers/ChambersSheet'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error from './pages/Error/Error'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chambers/:id" element={<ChambersSheet />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
