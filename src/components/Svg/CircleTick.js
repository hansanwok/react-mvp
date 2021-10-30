import React, { memo } from 'react'

const CircleTick = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='10' cy='10' r='10' fill='#33D65F' />
      <path
        d='M16.8293 6.14642L7.46341 15.5123L3.12195 11.1708L4.53658 9.75618L7.46341 12.3903L15.2683 4.58545L16.8293 6.14642Z'
        fill='white'
      />
    </svg>
  )
}

export default memo(CircleTick)
