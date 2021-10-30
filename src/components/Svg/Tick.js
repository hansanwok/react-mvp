import React, { memo } from 'react'

const Tick = () => {
  return (
    <svg
      width='12'
      height='10'
      viewBox='0 0 12 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 1.36655L3.80071 9.56584L0 5.76512L1.23843 4.52669L3.80071 6.83274L10.6335 0L12 1.36655Z'
        fill='#33D65F'
      />
    </svg>
  )
}

export default memo(Tick)
