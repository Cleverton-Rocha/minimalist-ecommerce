import { Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';
import Fornitures from './Pages/Fornitures/Fornitures';
import Categories from './Pages/Categories/Categories';
import Kitchen from './Pages/Kitchen/Kitchen';
import Eletronics from './Pages/Eletronics/Eletronics';

function MainRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='/categories/fornitures' element={<Fornitures />} />
        <Route path='/categories/kitchen' element={<Kitchen />}/>
        <Route path='/categories/eletronics' element={<Eletronics/>}/>
        <Route path='/categories/all' element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;