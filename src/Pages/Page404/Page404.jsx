import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className='text-4xl font-semibold mt-10'>Page not found</h1>
      <Link to='/' className='text-xl mt-5 border-2 border-black px-2 hover:bg-black hover:text-white transition duration-200'>Go home</Link>
    </div>
  );
}

export default Page404;