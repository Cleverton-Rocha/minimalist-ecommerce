import logo from '../../assets/img/2.png';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
function Header() {
  return (
    <div className='flex justify-around w-full h-28 shadow-md'>
      <div className='flex items-center'>
        <Link to="/">
          <img width={90} src={logo} alt="logotipo" />
        </Link>
      </div>

      <div className='flex items-center text-xl'>
        <ul className='flex gap-8'>
          <li><Link to="/categories/all" className='border-b-2 pb-1 hover:border-b-2 hover:border-b-lightOrange transition duration-300 ease-in-out'>CATEGORIES</Link></li>
          <li><a className='border-b-2 pb-1 hover:border-b-2 hover:border-b-lightOrange transition duration-300 ease-in-out' href="">PRODUCT PAGE</a></li>
          <li className='mt-1 cursor-pointer'><FaShoppingCart size={25}/></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;