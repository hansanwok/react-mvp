import React from 'react'
import { useHistory } from 'react-router-dom'

import Back from 'assets/images/back.png'

import './styles.scss'

const BackBtn = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <div className='back-container' onClick={goBack}>
      <img src={Back} alt='go back' className='back-btn' />
    </div>
  )
}

export default BackBtn
