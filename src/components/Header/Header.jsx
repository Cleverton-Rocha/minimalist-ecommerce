import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
function Header() {
  return (
    <div className='flex justify-around w-full h-28 shadow-md'>
      <div className='flex items-center'>
        <Link to="/">
          <img className='w-10 lg:w-20' src={logo} alt="logotipo" />
        </Link>
      </div>

      <div className='flex items-center text-md lg:text-xl'>
        <ul className='flex gap-8'>
          <li><Link to="/categories/all" className='border-b-2 pb-1 hover:border-b-2 hover:border-b-lightOrange transition duration-300 ease-in-out'>CATEGORIES</Link></li>
          <li><Link to="/product/1" className='border-b-2 pb-1 hover:border-b-2 hover:border-b-lightOrange transition duration-300 ease-in-out' >PRODUCT PAGE</Link></li>
          <li className='mt-1 cursor-pointer hidden lg:block'><FaShoppingCart size={25} /></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;