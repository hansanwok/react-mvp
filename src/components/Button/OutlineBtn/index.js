import React from 'react'
import classNames from 'classnames'
import { Button } from 'reactstrap'

const OutlineBtn = ({ text, className, ...props }) => {
  return (
    <Button
      block
      outline
      className={classNames('my-outline-btn', className)}
      {...props}
    >
      {text}
    </Button>
  )
}

export default OutlineBtn
