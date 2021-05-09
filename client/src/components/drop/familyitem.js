import React from "react";
import PropTypes from "prop-types";

const FamilyItem = ({
  family: {
    name,
    _id
  }
}) => {
  // return <button class='btn btn-primary' value={_id}>{name}</button>;
  return <option  value={_id}>{name}</option>;
};

FamilyItem.propTypes = {
  family: PropTypes.object.isRequired
};

export default FamilyItem;


