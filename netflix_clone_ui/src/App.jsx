import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import UserLiked from './pages/UserLiked';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Netflix />} />
        <Route path='/player' element={<Player />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tv' element={<TVShows />} />
        <Route path='/mylist' element={<UserLiked />} />
      </Routes>
    </BrowserRouter>
  );
}
