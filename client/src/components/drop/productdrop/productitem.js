import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({
  product: {
    name,
    _id
  }
}) => {
  // return <button class='btn btn-primary' value={_id}>{name}</button>;
  return <option  value={_id}>{name}</option>;
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;


