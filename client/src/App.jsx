import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/HomePage';
import { AirplanePage } from './pages/AirplanePage';
import { CreateAirplanePage } from './pages/CreateAirplanePage';
import { path } from './paths';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={path.home} element={<Homepage />}/>
      <Route path={`${path.airplane}/:id`} element={<AirplanePage />}/>
      <Route path={`${path.createAirplane}`} element={<CreateAirplanePage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
