import PropTypes from 'prop-types';

function Banner(props) {
  return (
    <div className='grid grid-cols-2 grid-flow-row rounded-sm'>

      <div className='bg-gray-200'>

        <div className='flex justify-center items-center h-full'>

          <div className='flex flex-col text-start max-w-sm'>
            <h1 className='text-3xl py-4 font-semibold'>Clean and comfortable design</h1>
            <p className='text-lg line w-11/12 mb-4'>Our products are made with your comfort in mind.</p>
            <a className='flex justify-center w-20 p-1 rounded-sm hover:bg-transparent hover:text-black border-2 border-black bg-black text-white text-lg font-semibold transition duration-300' href="">SHOP</a>
          </div>

        </div>

      </div>

      <div className='flex h-96'>
        <img className='object-cover' width={600} src={props.image} alt="" />
      </div>

    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Banner;