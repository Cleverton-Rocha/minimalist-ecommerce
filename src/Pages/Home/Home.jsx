import ProductCard from '../../components/ProductCard/ProductCard';
import Banner from '../../components/Banner/Banner';

import eletronics from '../../assets/img/eletronics.jpg';
import kitchen from '../../assets/img/kitchen.jpg';
import fornitures from '../../assets/img/fornitures.jpg';
import chair from '../../assets/img/cadeirabranca.jpg';
import lustre from '../../assets/img/lustre.jpg';
import vaso from '../../assets/img/vaso.jpg';
import madeira from '../../assets/img/madeira.jpg';
import banner from '../../assets/img/banner-image.jpg';


function Home() {
  return (
    <>

      <div id="home-container" className='relative container mx-auto max-w-screen-xl p-12'>
        <div className='flex justify-center gap-5'>

          <a className='flex' href="#">
            <img className='rounded-sm brightness-75 hover:brightness-50 cursor-pointer transition duration-500' src={fornitures} alt="" />
            <p className='absolute text-white font-semibold text-5xl bottom-20 ml-4'>Fornitures</p>
          </a>

          <a className='flex' href="#">
            <img className='rounded-sm brightness-75 hover:brightness-50 cursor-pointer transition duration-500' src={kitchen} alt="" />
            <p className='absolute text-white font-semibold text-5xl bottom-20 ml-4'>Kitchen</p>
          </a>

          <a className='flex' href="">
            <img className='rounded-sm brightness-75 hover:brightness-50 cursor-pointer transition duration-500' src={eletronics} alt="" />
            <p className='absolute text-white font-semibold text-5xl bottom-20 ml-4'>Eletronics</p>
          </a>
        </div>
      </div>

      <div id="products-container">

      </div>

      <div className='container mx-auto max-w-screen-xl px-12 pt-20'>
        <span className='text-3xl font-semibold'>Trending Now</span>
      </div>
      <div id="trending-container" className='flex gap-4 container mx-auto max-w-screen-xl mb-16 p-12'>
        
        <ProductCard image={chair} size='330' title='Traditional Chair' price='115$' />
        <ProductCard image={madeira} size='300' title='Traditional Chair' price='115$' />
        <ProductCard image={vaso} size='250' title='Traditional Chair' price='115$' />
        <ProductCard image={chair} size='330' title='Traditional Chair' price='115$' />
        <ProductCard image={lustre} size='250' title='Traditional Chair' price='115$' />
        
      </div>

      <div className='mx-auto max-w-screen-xl px-12 mb-24'>
        <Banner image={banner}/>
      </div>
      
    </>
  );
}

export default Home;