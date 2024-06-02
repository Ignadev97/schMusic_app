//components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx"
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'
import AddFormPage from "./pages/addFormPage/AddFormPage.jsx";
import SetupPage from "./pages/SetupPage/SetupPage.jsx";
import SongBookPage from "./pages/SongBookPage/SongBookPage.jsx";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/songbook' element={<SongBookPage/>}/>
        <Route path='/addForm' element={<AddFormPage/>}/>
        <Route path='/setup' element={<SetupPage/>}/>
        <Route path='/playlist' element={<PlaylistPage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
