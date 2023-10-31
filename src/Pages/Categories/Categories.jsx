import { useProduct } from '../../ProductContext';
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader';
import ProductCard from '../../components/ProductCard/ProductCard';
function Categories() {

  const { products } = useProduct();

  return (
    <div className="container mx-auto max-w-screen-xl p-12 min-h-screen">
      <div className='flex justify-center'>
        <span className='text-3xl font-semibold'>All</span>
      </div>
      <CategoriesHeader />
      <div>
        <div className='flex flex-wrap gap-4 container mx-auto max-w-screen-xl mb-16 p-12 '>
          {products.map((product, index) => (
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
    </div>
  );
}

export default Categories;