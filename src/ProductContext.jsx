/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductContext = createContext();

const actions = {
  SET_PRODUCTS: 'SET_PRODUCTS'
};

function productReducer(state, action) {
  switch (action.type) {
  case actions.SET_PRODUCTS:
    return { ...state, products: action.payload };
  default:
    return state;
  }
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, { products: [] });

  const apiUrl = 'https://ecommerce-products-ultr4.vercel.app/products';

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((products) => {
        dispatch({ type: actions.SET_PRODUCTS, payload: products });
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  }, []);

  return (
    <ProductContext.Provider value={state}>
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node,
};


export function useProduct() {
  return useContext(ProductContext);
}