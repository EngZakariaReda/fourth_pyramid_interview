import React from 'react'

export default function Centertext({children}) {
  return (
    <div className='my-5'>
        <h3 className='text-center fs-1 text-capitalize'>
            {children}
        </h3>
    </div>
  )
}
