import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ProductProvider } from './ProductContext';
function App() {

  return (
    <>
      <ProductProvider>
        <Header />

        <Outlet />

        <Footer />
      </ProductProvider>
    </>
  );
}

export default App;
