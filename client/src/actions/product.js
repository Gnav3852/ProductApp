import axios from 'axios';

import {GET_PRODUCT,GET_FAMILY,GET_PRODUCTS,GET_UP,GET_ID} from './types'



export const createProduct = (
  formData,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post(
      "http://localhost:5000/api/product",
      formData,
      config
    );
    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });

    dispatch('Saved');

  } catch (err) {
    console.error(err)
  }
};

export const getFamily = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:5000/api/family");
    dispatch({
      type: GET_FAMILY,
      payload: res.data
    });
  } catch (err) {
    console.log(err)
    // dispatch({
    //   type: PROFILE_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:5000/api/product");
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err)
    // dispatch({
    //   type: PROFILE_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

export const getUp = (id) => async dispatch => {
  try {

    const res = await axios.get(`http://localhost:5000/api/product/upsell/${id}`);

    dispatch({
      type: GET_UP,
      payload: res.data
    });
  } catch (err) {
    console.log(err)
    // dispatch({
    //   type: PROFILE_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

export const getId = (name) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/api/product/upsell/${name}`);
    dispatch({
      type: GET_ID,
      payload: res.data
    });
  } catch (err) {
    console.log(err)
    // dispatch({
    //   type: PROFILE_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

