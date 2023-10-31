import ProductCard from '../../components/ProductCard/ProductCard';
import { useProduct } from '../../ProductContext';
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader';


function Kitchen() {
  const { products } = useProduct();

  const limitedProducts = products.slice(8, 10);
  return (
    <div className='container mx-auto max-w-screen-xl p-12 min-h-screen'>
      <div className='flex justify-center'>
        <span className='text-3xl font-semibold'>Kitchen</span>
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

export default Kitchen;