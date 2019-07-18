import React from 'react'
import './InfiniteLoader.css'

export default function SmallLoadingAnimation() {
  return (
  <div className="loader-ellips">
    <span className="loader-ellips__dot"></span>
    <span className="loader-ellips__dot"></span>
    <span className="loader-ellips__dot"></span>
    <span className="loader-ellips__dot"></span>
  </div>
  )
}
