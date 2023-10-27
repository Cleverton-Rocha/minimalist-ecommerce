import PropTypes from 'prop-types';

function ProductCard(props) {
  return (
    
    <a className='inline-block border-2 border-gray-300 rounded-sm hover:border-gray-600 transition duration-300 max-w-xs w-54' href="">
      <div className='p-12'>
        <img width={props.size} src={props.image} alt="Product" />
      </div>

      <div>
        <p className='text-xl text-black font-medium pl-4 pr-4'>{props.title}</p>
        <p className='pl-4 font-semibold text-xl mb-2'>{props.price}</p>
      </div>
    </a>
    
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default ProductCard;