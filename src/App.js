import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import EventPage from './pages/EventsPage/EventPage';
import HoroscopePage from './pages/HoroscopePage/HoroscopePage';
import MusicPage from './pages/MusicPage/MusicPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      
      <NavigationComponent></NavigationComponent>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/Shop" element={<ShopPage/>}></Route>
        <Route exact path="/Articles" element={<ArticlePage/>}></Route>
        <Route exact path="/Events" element={<EventPage/>}></Route>
        <Route exact path="/Music" element={<MusicPage/>}></Route>
        <Route exact path="/About Us" element={<AboutUsPage/>}></Route>
        <Route exact path="/Horoscope" element={<HoroscopePage/>}></Route>
        <Route exact path="/Login" element={<LoginPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
