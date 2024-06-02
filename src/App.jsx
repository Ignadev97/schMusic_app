//components
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
