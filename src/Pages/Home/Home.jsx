import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';

import eletronics from '../../assets/img/eletronics.jpg';
import kitchen from '../../assets/img/kitchen.jpg';
import fornitures from '../../assets/img/fornitures.jpg';
import banner from '../../assets/img/banner-image.jpg';
import TrendingContainer from '../../components/TredingContainer/TrendingContainer';


function Home() {

  return (
    <>
      <div className='min-h-screen container mx-auto max-w-screen-xl md:p-12'>
        <div id="home-container" className='relative p-12'>
          <div className='flex flex-col md:flex-row justify-center gap-5'>

            <Link to="/categories/fornitures" className='flex' >
              <img className='rounded-sm brightness-75 hover:brightness-50 cursor-pointer transition duration-500' src={fornitures} alt="" />
              <p className='absolute text-white font-semibold text-xl md:text-4xl lg:text-5xl ml-4 mt-5 md:bottom-20'>Fornitures</p>
            </Link>

            <Link to="/categories/kitchen" className='flex' >
              <img className='rounded-sm brightness-75 hover:brightness-50 cursor-pointer transition duration-500' src={kitchen} alt="" />
              <p className='absolute text-white font-semibold text-xl md:text-4xl lg:text-5xl ml-4 mt-5 md:bottom-20'>Kitchen</p>
            </Link>

            <Link to="/categories/eletronics" className='flex'>
              <img className='rounded-sm brightness-75 hover:brightness-50 cursor-pointer transition duration-500' src={eletronics} alt="" />
              <p className='absolute text-white font-semibold text-xl md:text-4xl lg:text-5xl ml-4 mt-5 md:bottom-20'>Eletronics</p>
            </Link>

          </div>
        </div>

        <TrendingContainer />

        <div className='mx-auto max-w-screen-xl px-12 mb-24'>

          <Banner image={banner} />

        </div>

      </div>
    </>
  );
}

export default Home;