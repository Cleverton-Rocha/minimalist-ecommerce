import ProductCard from '../../components/ProductCard/ProductCard';
import { useProduct } from '../../ProductContext';
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader';


function Eletronics() {
  const { products } = useProduct();

  const limitedProducts = products.slice(6, 8);
  return (
    <div className='container mx-auto max-w-screen-xl p-12 min-h-screen'>
      <div className='flex justify-center'>
        <span className='text-3xl font-semibold'>Eletronics</span>
      </div>
      <CategoriesHeader />
      <div className='flex gap-4 container mx-auto max-w-screen-xl mb-16 p-12'>
        {limitedProducts.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            image={product.image}
            size='300'
            price={`${product.price}$`}
          />
        ))}

      </div>
    </div>
  );
}

export default Eletronics;