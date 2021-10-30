
import React from 'react'
import classNames from 'classnames'
import PulseLoader from 'react-spinners/PulseLoader'

const OverlayLoading = ({ loading, className }) => {
  if (!loading) return null

  return (
    <div className={classNames('overlay-loading-container', className)}>
      <PulseLoader color={'#33D65F'} loading={true} size={12} />
    </div>
  )
}

export default OverlayLoading
