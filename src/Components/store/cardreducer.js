// // cartReducer.js
// const initialState = {
//     items: [],
//   };

//   const cartReducer = (state = initialState, action) => {
//     console.log(state)
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         return {
//           ...state,
//           items: [...state.items, action.payload],
//         }; 










//       case 'ADD_TO_CART':
//         const { productId, variationId, quantity } = action.payload;

//         // Check if the product already exists in the cart
//         const existingProductIndex = state.items.findIndex((item) => item.product_id === productId);

//         if (existingProductIndex !== -1) {
//           // If the product exists, update the quantity and total price
//           return {
//             ...state,
//             items: state.items.map((item, index) =>
//               index === existingProductIndex
//                 ? {
//                     ...item,
//                     variations: item.variations.map((variation) =>
//                       variation.variation_id === variationId
//                         ? {
//                             ...variation,
//                             quantity: variation.quantity + quantity,
//                             total_price: variation.total_price + quantity * variation.price,
//                           }
//                         : variation
//                     ),
//                   }
//                 : item
//             ),
//           };
//         } else {
//           // If the product doesn't exist, add a new entry to the cart
//           return {
//             ...state,
//             items: [
//               ...state.items,
//               {
//                 product_id: productId,
//                 total_price: quantity * action.payload.product.price,
//                 variations: [
//                   {
//                     variation_id: variationId,
//                     quantity: quantity,
//                     price: action.payload.product_variation.price,
//                     total_price: quantity * action.payload.product_variation.price,
//                   },
//                 ],
//               },
//             ],
//           };
//         }
//       default:
//         return state;

//     }

//   };

//   export default cartReducer;








// cartReducer.js
const initialState = {
  items: [],
};


// const updatedItems = state.items.map((item, index) =>
// index === existingProductIndex ? { ...item, quantity: item.quantity + quantity, variation: [...item.variation, ...variation] } : item
// );

// return {
// ...state,
// items: updatedItems,
// };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const quantity = action.payload
      const existingProductIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        // Product already in cart, replace quantity
        const updatedItems = state.items.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: action.payload.quantity } : item
        );

        return {
          ...state,
          items: updatedItems,
        };


        //   const updatedItems = state.items.map((item, index) =>
        //   index === existingProductIndex ? { ...item, quantity: item.quantity + action.payload.quantity, variation: [...item.variation, ...action.payload.variation] } : item
        // );

        return {
          ...state,
          items: updatedItems,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload }],
        };
      }
    case 'INCREMENT_QUANTITY_VA':
      const { productId, newQuantity } = action.payload;

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === productId ? { ...item, qty: newQuantity } : item
        ),
      };



    case 'PATIENT_NAME':
      const { patientId, patient_name } = action.payload;
      console.log("patient_name dis", patient_name)
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === patientId ? { ...item, patient_name: patient_name } : item
        ),
      };


 
      case 'PATIENT_FILE':
        const { patientid, patient_file } = action.payload;
        console.log("patient_file", patient_file)
        console.log("patientid", patientid)
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === patientid ? { ...item, patient_file: patient_file } : item
          ),
        };
  
  


      case 'REMOVE_FROM_CART':
        const patientide = action.payload;
        // const { patientid } = action.payload;
        const removeItems = state.items.filter(item => item.id !== patientide);
   
        return {
          ...state,
          items: removeItems,
        };


  

    case 'REMOVE_ALL_FROM_CART':
      return {
        ...state,
        items: [], // This will remove all products from the cart
      };


    case 'INCREMENT_QUANTITY_incart':
      return {
        ...state,
        items: state.items.map(product =>
          product.id === action.payload
            ? { ...product, qty: product?.qty + 1 }
            : product
        ),
      };
    case 'DECREMENT_QUANTITY_incart':
      return {
        ...state,
        items: state.items.map(product =>
          product.id === action.payload
            ? { ...product, qty: Math.max(1, product.qty - 1) }
            : product
        ),
      };
    // PROUCT_Name






    case 'UPDATE_CART_ITEM':
      const updatedCartItem = action.payload;
      const updatedItems = state.items.map((item) =>
        item.id === updatedCartItem.id
          ? {
            ...item,
            quantity: updatedCartItem.quantity,
            variation: updatedCartItem.variation,
          }
          : item
      );

      return {
        ...state,
        items: updatedItems,
      };


    default:
      return state;
  }
};

export default cartReducer;


