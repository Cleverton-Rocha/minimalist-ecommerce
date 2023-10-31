import PropTypes from 'prop-types';

function ProductDetails(props) {
  return (
    <div className="grid grid-cols-3 gap-10 text-center container mx-auto max-w-screen-xl px-12">

      <div className="bg-gray-200 text-2xl font-semibold px-4 w-56">
        <h1>Texture:</h1>
        <span>{props.texture}</span>
      </div>
      <div className="bg-gray-200 text-2xl font-semibold px-4 w-56">
        <h1>Weight:</h1>
        <span>{props.weight}</span>
      </div>
      <div className="bg-gray-200 text-2xl font-semibold px-4 w-56">
        <h1>Size:</h1>
        <span>{props.size}</span>
      </div>

    </div>
  );
}

ProductDetails.propTypes = {
  texture: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

export default ProductDetails;