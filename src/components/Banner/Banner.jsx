import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Banner(props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 grid-flow-row rounded-sm'>

      <div className='bg-gray-200 px-12'>

        <div className='flex justify-center items-center h-full'>

          <div className='flex flex-col items-center md:items-start text-start max-w-sm'>
            <h1 className='text-xl md:text-3xl text-center md:text-start py-4 font-semibold'>Clean and comfortable design</h1>
            <p className='text-md text-center md:text-start md:text-lg line w-11/12 mb-4'>Our products are made with your comfort in mind.</p>
            <Link to="/categories/all" className='flex justify-center w-20 p-1 rounded-sm hover:bg-transparent hover:text-black border-2 border-black bg-black text-white text-sm md:text-lg font-semibold transition duration-300 mb-4'>SHOP</Link>
          </div>

        </div>

      </div>

      <div className='h-96 hidden md:flex'>
        <img className='object-cover' width={600} src={props.image} alt="" />
      </div>

    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Banner;