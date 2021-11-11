import React from 'react'
import '../sass/request.scss'

import RequestSvg from '../icons/RequestSvg'

const Requests = function () {
   return (
      <div className='request'>
         <RequestSvg />
         <h2>No Requests Yet</h2>
      </div>
   )
}

export default Requests