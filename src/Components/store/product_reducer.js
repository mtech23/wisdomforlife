 
const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
      case 'FETCH_PRODUCTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'INCREMENT_QUANTITY':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      case 'DECREMENT_QUANTITY':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload
              ? { ...product, quantity: Math.max(0, product.quantity - 1) }
              : product
          ),
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  