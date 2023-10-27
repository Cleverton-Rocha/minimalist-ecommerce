import logo from '../../assets/img/2.png';
import {FaShoppingCart} from 'react-icons/fa';
function Header() {
  return (
    <div className='flex justify-around w-full h-28 shadow-md'>
      <div className='flex items-center'>
        <img width={90} src={logo} alt="logotipo" />
      </div>

      <div className='flex items-center text-xl'>
        <ul className='flex gap-8'>
          <li><a className='border-b-2 pb-1 hover:border-b-2 hover:border-b-lightOrange transition duration-300 ease-in-out' href="">CATEGORIES</a></li>
          <li><a className='border-b-2 pb-1 hover:border-b-2 hover:border-b-lightOrange transition duration-300 ease-in-out' href="">PRODUCT PAGE</a></li>
          <li className='mt-1 cursor-pointer'><FaShoppingCart size={25}/></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;