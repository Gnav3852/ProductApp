import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import Upsell from "../components/drop/upsell/upsells";




const Droptest = name => {

  return (

    <Fragment>
       <select className="form-group">
        <Upsell id={name} />
      </select>

    </Fragment>
  )
}

Droptest.propTypes = {
 name: PropTypes.object.isRequired,
}

export default Droptest
