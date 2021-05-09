import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createFamily} from '../actions/family' 

const Family = ({createFamily}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });
  const { name, description} = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    createFamily(formData)
  }
  return (
    <div>
       <section className="container">
      <h1 className="large text-primary">Create a family</h1>
      <form className="form" onSubmit={(e=>onSubmit(e))}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Family Name"
            name="name"
            value={name}
              onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
            <div className="form-group">
              <textarea
                placeholder="A short decription of the Family"
                name="description"
                value={description}
              onChange={e => onChange(e)}
              />
              <small className="form-text">Tell us a bit about your Family</small>
            </div>
          </div>
        <input type="submit" className="btn btn-primary" value="Save" />
      </form>
    </section>
    </div>
  )
}

Family.propTypes = {
  createFamily:PropTypes.func.isRequired
};



export default connect(null,{createFamily})(Family);
