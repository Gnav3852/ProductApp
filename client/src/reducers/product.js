import {
  GET_PRODUCT,
  PRODUCT_ERROR,
  GET_FAMILY,
  GET_PRODUCTS,
  GET_UP
} from "../actions/types";

const initalState = {
  product: null,
  loading: true,
  families: [],
  products: [],
  upsell: [],
  id: null,
  error: {}
};

export default function(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false
      };
    case GET_PRODUCT:
      return {
        ...state,
        id: payload,
        loading: false
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_FAMILY:
      return {
        ...state,
        families: payload,
        loading: false
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false
      };
    case GET_UP:
      return {
        ...state,
        products: payload,
        loading: false
      };

    default:
      return state;
  }
}
