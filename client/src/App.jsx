import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import './styles/App.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<h1>ABOUT</h1>} />
      </Routes>
    </Router>
  )
}

export default App
