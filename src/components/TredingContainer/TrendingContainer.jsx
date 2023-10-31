import ProductCard from '../ProductCard/ProductCard';
import { useProduct } from '../../ProductContext';

function TrendingContainer() {
  const { products } = useProduct();

  const limitedProducts = products.slice(0, 5);


  return (
    <>
      <div className='px-12 pt-20 text-center md:text-left'>
        <span className='text-2xl font-semibold'>Trending Now</span>
      </div>
      <div id="trending-container" className='flex flex-col items-center md:flex-row gap-4  mb-16 p-12'>

        {limitedProducts.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            image={product.image}
            size='500'
            price={`${product.price}$`}
          />
        ))}

      </div>
    </>
  );
}

export default TrendingContainer;