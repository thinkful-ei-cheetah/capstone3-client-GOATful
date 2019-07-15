import React from 'react';
import './Loader.css';
import Spinner from 'react-spinkit'
  
export default function Loader(props) {
  if (props.isLoading) {
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
