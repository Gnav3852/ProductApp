import axios from 'axios';

import {GET_PRODUCT} from './types'



export const createFamily = (
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
      "http://localhost:5000/api/family",
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