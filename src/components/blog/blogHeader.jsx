import React from 'react'

export const BlogHeader = ({title}) => {
  return (
    <>
     <div className="blog-header">
        <div className="blog-header__text-box">
          <h1 className="primary-heading">
            {title}
          </h1>
        </div>
      </div> 
    </>
  )
}
