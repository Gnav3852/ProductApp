import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProduct } from "../actions/product";
import Families from '../components/drop/families'


const Product = ({ createProduct }) => {
  const [formData, setFormData] = useState({
    family: "",
    name: "",
    description: "",
    releasedate: "",
    eol: "",
    eos: ""
  });
  const { family, name, description, releasedate, eol, eos } = formData;

  


  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProduct(formData);
  };




  return (
    <div>
      <section className="container">
        <h1 className="large text-primary">Publish your product</h1>
        <p className="lead">
          <i /> Give some info about your product
        </p>
        
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <select name="family" value={family} onChange={e => onChange(e)}>
              <Families/>
            </select>
            {/* <div name="family" value={family} onChange={e => onChange(e)}>
              <Families />
            </div> */}
            <small className="form-text">
              What family is your product apart of
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name of product"
              name="name"
              value={name}
              onChange={e => onChange(e)}
            />
            <small className="form-text">
              what is the name of your product
            </small>
            <div className="form-group">
              <textarea
                placeholder="A short decription of the product"
                name="description"
                value={description}
                onChange={e => onChange(e)}
              />
              <small className="form-text">
                Tell us a bit about your product
              </small>
            </div>
          </div>
          <div className="form-group">
            <input
              type="date"
              placeholder="Release date"
              name="releasedate"
              value={releasedate}
              onChange={e => onChange(e)}
            />
            <small className="form-text">When was you product released</small>
          </div>
          <div className="form-group">
            <input
              type="date"
              placeholder="WHen is the Eos"
              name="eos"
              value={eos}
              onChange={e => onChange(e)}
            />
            <small className="form-text">End of support</small>
          </div>
          <small className="form-group">
            <input
              type="date"
              placeholder="When is the eol"
              name="eol"
              value={eol}
              onChange={e => onChange(e)}
            />
            <small className="form-text">End of Life</small>
          </small>
          <input type="submit" className="btn btn-primary my-1" />
        </form>
      </section>
    </div>
  );
};
Product.propTypes = {
  createProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProduct }
)(Product);
