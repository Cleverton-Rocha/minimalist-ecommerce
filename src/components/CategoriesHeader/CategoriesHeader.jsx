import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

function CategoriesHeader() {
  return (
    <>
      <div className='flex container max-w-screen-xl mx-auto px-12'>
        <Link className='flex items-center gap-1' to="/">
          <FaChevronLeft size={15} />
          <span className='text-lg font-semibold'>Home</span>
        </Link>
      </div>
      <div className='flex justify-center gap-8 text-lg items-center mx-auto'>
        <Link to="/categories/all" className='px-3 border-2 border-gray-400 rounded-sm hover:border-gray-600 transition duration-200'>All</Link>
        <Link to="/categories/fornitures" className='px-3 border-2 border-gray-400 rounded-sm hover:border-gray-600 transition duration-200'>Fornitures</Link>
        <Link to="/categories/kitchen" className='px-3 border-2 border-gray-400 rounded-sm hover:border-gray-600 transition duration-200'>Kitchen</Link>
        <Link to="/categories/eletronics" className='px-3 border-2 border-gray-400 rounded-sm hover:border-gray-600 transition duration-200'>Eletronics</Link>
      </div>
    </>
  );
}

export default CategoriesHeader;