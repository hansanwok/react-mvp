import React from 'react'
import classNames from 'classnames'
import PulseLoader from 'react-spinners/PulseLoader'

const Loader = ({ loading, className }) => {
  if (!loading) return null

  return (
    <div className={classNames('loader-container', className)}>
      <PulseLoader color={'black'} loading={true} size={12} />
    </div>
  )
}

export default Loader
