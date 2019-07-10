import React from 'react';
import './Loader.css';
import Spinner from 'react-spinkit'
import { withAppContext } from '../../contexts/AppContext';
  
function Loader(props) {
  const {isLoading} = props.appContext
  if (isLoading) {
    return (
      <div className='loader'>
        <Spinner name="cube-grid" color='white' fadeIn='quarter'/>
        <p>loading</p>
      </div>
    )
  } else {
    return <></>
  }
  
}

export default withAppContext(Loader);