import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';
import Fornitures from './Pages/Fornitures/Fornitures';
import Categories from './Pages/Categories/Categories';
import Kitchen from './Pages/Kitchen/Kitchen';
import Eletronics from './Pages/Eletronics/Eletronics';
import ProductPage from './Pages/ProductPage/ProductPage';
import Page404 from './Pages/Page404/Page404';

function MainRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='/categories/fornitures' element={<Fornitures />} />
        <Route path='/categories/kitchen' element={<Kitchen />} />
        <Route path='/categories/eletronics' element={<Eletronics />} />
        <Route path='/categories/all' element={<Categories />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/404' element={<Page404/>}/>
        <Route path='*' element={<Navigate to="/404" replace/>}/>
      </Route>
    </Routes>
  );
}

export default MainRoutes;