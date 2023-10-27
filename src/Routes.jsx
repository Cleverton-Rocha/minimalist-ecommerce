import { Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';

function MainRoutes() {
  return (
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default MainRoutes;