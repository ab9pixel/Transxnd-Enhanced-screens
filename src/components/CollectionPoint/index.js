import React from 'react'
import InnerContentHeader from '../InnerContentHeader'

const CollectionPoint = () => {
  return (
    <div className='collection-point'>
        <div className='collection-point-header'>
            <InnerContentHeader text="Collection Point"/>
            <p>Enter Cash Collection information if you wish to make 
            Cash Collection remittances to this beneficiary.</p>        
        </div>
    </div>
  )
}

export default CollectionPoint