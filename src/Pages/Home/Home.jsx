import { Link } from 'react-router-dom';
import { useProduct } from '../../ProductContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import Banner from '../../components/Banner/Banner';

import eletronics from '../../assets/img/eletronics.jpg';
import kitchen from '../../assets/img/kitchen.jpg';
import fornitures from '../../assets/img/fornitures.jpg';
import banner from '../../assets/img/banner-image.jpg';


function Home() {

  const { products } = useProduct();

  const limitedProducts = products.slice(0, 5);


  return (
    <>
      <div className='min-h-screen container mx-auto max-w-screen-xl p-12'>
        <div id="home-container" className='relative p-12'>
          <div className='flex justify-center gap-5'>

            <Link to="/categories/fornitures" className='flex' >
              <img className='rounded-sm brightness-75 hover:brightness-50 cursor-pointer transition duration-500' src={fornitures} alt="" />
              <p className='absolute text-white font-semibold text-5xl bottom-20 ml-4'>Fornitures</p>
            </Link>

            <Link to="/categories/kitchen" className='flex' >
              <img className='rounded-sm brightness-75 hover:brightness-50 cursor-pointer transition duration-500' src={kitchen} alt="" />
              <p className='absolute text-white font-semibold text-5xl bottom-20 ml-4'>Kitchen</p>
            </Link>

            <Link to="/categories/eletronics" className='flex'>
              <img className='rounded-sm brightness-75 hover:brightness-50 cursor-pointer transition duration-500' src={eletronics} alt="" />
              <p className='absolute text-white font-semibold text-5xl bottom-20 ml-4'>Eletronics</p>
            </Link>

          </div>
        </div>

        <div className='px-12 pt-20'>
          <span className='text-3xl font-semibold'>Trending Now</span>
        </div>
        <div id="trending-container" className='flex gap-4  mb-16 p-12'>

          {limitedProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
              size='500'
              price={`${product.price}$`}
            />
          ))}

        </div>

        <div className='mx-auto max-w-screen-xl px-12 mb-24'>

          <Banner image={banner} />

        </div>

      </div>
    </>
  );
}

export default Home;