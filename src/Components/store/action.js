// actions.js
// export const fetchProductsRequest = () => ({
//   type: 'FETCH_PRODUCTS_REQUEST',
// });


// export const fetchProductsSuccess = (products) => {
//   const productsWithDefaultQuantity = products.map(product => ({
//     ...product,
//     quantity: 1,
//   }));
//   return {
//     type: 'FETCH_PRODUCTS_SUCCESS',
//     payload: productsWithDefaultQuantity,
//   };
// };

// export const fetchProductsFailure = (error) => ({
//   type: 'FETCH_PRODUCTS_FAILURE',
//   payload: error,
// });

export const addToCart = (product) => ({

  type: 'ADD_TO_CART',
  payload: product,

});

export const incrementQuantity = (productId) => ({
  type: 'INCREMENT_QUANTITY',
  payload: productId,
});

export const decrementQuantity = (productId) => ({
  type: 'DECREMENT_QUANTITY',
  payload: productId,
});

export const incrementQuantityCart = (productId) => {
  console.log("productId", productId); // Log the productId here

  return {
    type: 'INCREMENT_QUANTITY_incart',
    payload: productId,
  };
};
export const decrementQuantityCart = (productId) => {
  console.log("productId", productId); // Log the productId here

  return {
    type: 'DECREMENT_QUANTITY_incart',
    payload: productId,
  };
};
export const incrementvariationQuantity = (productId, newQuantity) => ({

  type: 'INCREMENT_QUANTITY_VA',
  payload: { productId, newQuantity },
});



export const patient_name = (patientId, patient_name) => {
  console.log("patient_name" , patient_name)
  return (
    {

      type: 'PATIENT_NAME',
      payload: { patientId, patient_name },
    }
  )
}

// ({

//   type: 'PATIENT_NAME',
//   payload: { patientId, patient_name },
// });




export const patient_file = (patientid, patient_file) => ({

  type: 'PATIENT_FILE',
  payload: { patientid, patient_file },
});


export const deleteitem = (patientid) => ({

  type: 'REMOVE_FROM_CART',
  payload: patientid,
});



// PATIENT_FILE


export const decrementcariationQuantity = (productId) => ({
  type: 'DECREMENT_QUANTITY',
  payload: productId,
});
export const updateCartItem = (updatedCartItem) => ({
  type: 'UPDATE_CART_ITEM',
  payload: updatedCartItem,
});
 
export const removeFromCart = () => ({
  type: 'REMOVE_ALL_FROM_CART',
});
// export const fetchProducts = () => {
//   return async (dispatch) => {
//     dispatch(fetchProductsRequest());
//     try {
//       const response = await fetch('https://custom2.mystagingserver.site/food-stadium/public/api/all_product');
//       const data = await response.json();
//       dispatch(fetchProductsSuccess(data?.data));

//     } catch (error) {
//       dispatch(fetchProductsFailure(error.message));
//     }
//   };
// };




























