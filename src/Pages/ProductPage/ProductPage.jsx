import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails/ProductDetails';

function ProductPage() {
  const apiUrl = 'https://ecommerce-products-ultr4.vercel.app/products/';
  const [data, setData] = useState(null);
  let { id } = useParams();

  const fetchApi = (id) => {
    fetch(apiUrl + id)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((product) => {
        if (product[0] == 'Product not found') {
          throw new Error('product with ID not found');
        }
        setData(product);
      })
      .catch((error) => {
        console.error(`${error}`);
      });
  };

  useEffect(() => {
    fetchApi(id);
  }, [id]);

  const product = data;

  if (data === null) {

    return (
      <div className='flex flex-col items-center mt-20 gap-20 text-4xl text-center min-h-screen'>
        <div className="border-t-2 border-gray-400 border-solid rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  } else {
    return (
      <>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-flow-row rounded-sm p-4 md:p-12 container mx-auto max-w-screen-xl mt-10 mb-20'>
          <div className='flex justify-center h-4/4'>
            <img className='object-contain' width={500} src={product.image} alt="" />
          </div>

          <div className='bg-gray-200 h-4/4'>
            <div className='flex justify-center h-full'>
              <div className='flex flex-col justify-center items-center text-start w-80 md:max-w-sm'>
                <h1 className='text-xl md:text-2xl md:mb-12 text-center py-4 font-semibold'>{product.name}</h1>
                <p className='text-md text-center md:text-left mb-16'>{product.description}</p>
                <div className='flex gap-20 md:gap-32'>
                  <span className='text-2xl md:text-4xl font-semibold'>
                    {`${product.price}.00$`}
                  </span>
                  <a className='flex justify-center w-24 md:w-32 mb-2 p-1 rounded-sm hover:bg-transparent hover:text-black border-2 border-red-600 bg-red-600 text-white text-sm md:text-lg font-semibold transition duration-300' href="">BUY NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-20'>
          <ProductDetails
            texture={product.texture}
            weight={product.weight}
            size={product.size}
          />
        </div>
      </>
    );
  }
}

export default ProductPage;
