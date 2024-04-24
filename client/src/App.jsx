import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/about" element={<h1>ABOUT</h1>} />
      </Routes>
    </Router>
  )
}

export default App
