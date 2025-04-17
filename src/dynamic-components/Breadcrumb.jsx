import React from 'react'
import './dynamic-components.css'
function Breadcrumb({title}) {

  return (
    <div className="fancy-cards-five breadcrumb">
      <div className="container p-[76px] pt-[200px] pb-[150px]">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3 text-center">
            <h1 className='capitalize font-bold'>{title}</h1><br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb