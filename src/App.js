import './App.css';
import { Routes, Route } from 'react-router-dom'
//import NavBar from './Components/NavBar/NavBar';
import StarshipList from './Components/StarShips/StarshipList/StarshipList';
import StarshipDetails from './Components/StarShips/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
    {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;