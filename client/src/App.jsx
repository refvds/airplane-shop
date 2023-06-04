import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/HomePage';
import { path } from './paths';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={path.home} element={<Homepage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
