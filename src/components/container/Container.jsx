// ek box hota hai jiske upper niche kuch hai jaise header footer hai
// container ke ander styling properties hogayi. 

import React from 'react'

function Container({children}) {
  return <div className=' w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container