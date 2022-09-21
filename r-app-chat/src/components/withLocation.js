import React from 'react'
import { useNavigate } from "react-router-dom";

const withLocation = Component => props => {
    const history = useNavigate();
  
    return <Component {...props} history={history} />;
  };


export default withLocation