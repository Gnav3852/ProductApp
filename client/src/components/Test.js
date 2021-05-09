import React, { Fragment, useState } from "react";
import Products from "../components/drop/productdrop/products";
import Upsell from "../components/drop/upsell/upsells";
import { getUp } from "../actions/product";
import DropTest from "./Droptest";

const Test = () => {
  const [formData, setFormData] = useState({
    name: ""
  });

  const [displayUpsell, toggleUpsell] = useState(false);
  const { name } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const id = formData.name;
    //try passing console.logging id as formData.name then pass that into the fuct of get up
    console.log(id);
    getUp(id);
    // Test1(id);
  };

  // const Test1 = id => {
  //   if (id !== null) {
  //     <Fragment>
  //       <Upsell id={id} />
  //     </Fragment>;
  //   }
  // };

  return (
    <Fragment>
      <section className="container">
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <select name="name" value={name} onChange={e => onChange(e)}>
              <Products />
            </select>
            {/* <div name="family" value={family} onChange={e => onChange(e)}>
              <Families />
            </div> */}
          </div>
          <input type="submit" className="btn btn-primary my-1" />
        </form>
      </section>
      <section className='container' className ="form">
            <DropTest name={name}/>
      </section>  
      
    </Fragment>
  );
};

export default Test;
