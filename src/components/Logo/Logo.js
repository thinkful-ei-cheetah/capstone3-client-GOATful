import React from 'react'

export default function Logo(props) {

  var svgStyle = {
    width: '40px',
    height: '40px',
  };
  
  return (
      <svg className={props.className} style={svgStyle} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 40" x="0px" y="0px"><title>shutter</title><path d="M16 0.6c-8.498 0-15.4 6.903-15.4 15.4s6.903 15.4 15.4 15.4c8.498 0 15.4-6.903 15.4-15.4s-6.903-15.4-15.4-15.4zM15.611 1.602l1.098 0.053c4.354 0.211 8.206 2.377 10.699 5.627l0.244 0.32-4.316 7.393-7.176-12.439zM14.471 1.715l4.287 7.434h-15.418l0.598-0.926c2.229-3.447 5.888-5.881 10.135-6.453zM28.314 8.535l0.498 0.982c0.988 1.949 1.547 4.153 1.547 6.482 0 1.927-0.383 3.763-1.070 5.445l-0.152 0.373h-8.572l7.195-12.332zM2.863 10.182h8.578l-7.715 13.352-0.504-0.977c-1.015-1.969-1.59-4.2-1.59-6.557v-0.002c0.007-1.926 0.39-3.761 1.078-5.443zM12.645 10.184h6.719l3.379 5.846-3.375 5.783h-6.695l-3.387-5.816 3.186-5.514zM8.684 17.037l7.787 13.365-1.098-0.049c-4.361-0.191-8.226-2.34-10.734-5.576l-0.246-0.318 3.773-6.527zM13.277 22.857h15.395l-0.602 0.926c-2.221 3.42-5.852 5.847-10.064 6.439l-0.041 0.006h-0.391l-3.77-6.469z"/><text x="0" y="47" fill="#000000" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by vectlab</text><text x="0" y="52" fill="#000000" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text>
      </svg>
  )
}

