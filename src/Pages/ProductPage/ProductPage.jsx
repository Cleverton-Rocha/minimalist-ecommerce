import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      <div className='grid grid-cols-2 grid-flow-row rounded-sm min-h-screen p-12 container mx-auto max-w-screen-xl mt-10'>
        <div className='flex justify-center h-3/4'>
          <img className='object-contain' width={500} src={product.image} alt="" />
        </div>

        <div className='bg-gray-200 h-3/4'>
          <div className='flex justify-center h-full'>
            <div className='flex flex-col justify-center items-center text-start max-w-sm'>
              <h1 className='text-3xl mb-12 text-center py-4 font-semibold'>{product.name}</h1>
              <p className='text-lg mb-16'>{product.description}</p>
              <div className='flex gap-36'>
                <span className='text-4xl font-semibold'>
                  {`${product.price}.00$`}
                </span>
                <a className='flex justify-center w-32 p-1 rounded-sm hover:bg-transparent hover:text-black border-2 border-red-600 bg-red-600 text-white text-lg font-semibold transition duration-300' href="">BUY NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
