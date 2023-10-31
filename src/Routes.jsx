import { Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';
import Fornitures from './Pages/Fornitures/Fornitures';

function MainRoutes() {
  return (
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories/fornitures' element={<Fornitures/>}/>
      </Route>
    </Routes>
  );
}

export default MainRoutes;