import React from "react";
import PropTypes from "prop-types";

const Upitem = ({ product: { name, _id } }) => {
  return (
    <p>
      <input type="checkbox" name="current" /> {name}
    </p>
  );
};

Upitem.propTypes = {
  product: PropTypes.object.isRequired
};

export default Upitem;
