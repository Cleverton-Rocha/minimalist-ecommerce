import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  return (

    <Link to={`/product/${props.id}`} className='flex flex-col justify-between border-2 border-gray-300 rounded-sm hover:border-gray-600 transition duration-300 w-48 md:w-64'>
      <div className='p-12'>
        <img className='scale-125' width={props.size} src={props.image} alt="Product" />
      </div>

      <div className=''>
        <p className='text-xl text-black font-medium pl-4 pr-4'>{props.name}</p>
        <p className='pl-4 font-semibold text-xl mb-2'>{props.price}</p>
      </div>
    </Link>

  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default ProductCard;