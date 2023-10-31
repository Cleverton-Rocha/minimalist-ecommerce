import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useProduct } from '../../ProductContext';



function Fornitures() {

  const { products } = useProduct();

  const limitedProducts = products.slice(0, 5);

  return (
    <div className='container mx-auto max-w-screen-xl p-12 min-h-screen'>
      <div className='w-20'>
        <Link className='flex items-center gap-1' to="/">
          <FaChevronLeft size={15} />
          <span className='text-lg font-semibold'>Home</span>
        </Link>
      </div>
      <div id="trending-container" className='flex gap-4 container mx-auto max-w-screen-xl mb-16 p-12'>
        {limitedProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            size='500'
            price={`${product.price}$`}
          />
        ))}

      </div>
    </div>
  );
}

export default Fornitures;