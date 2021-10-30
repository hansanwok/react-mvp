import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
// import { useHistory } from 'react-router-dom'

function PickFurniture() {
  // const history = useHistory()
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('features:meta_title.home')}</title>
        <meta name='description' content='' />
      </Helmet>

      <div className='home-page-container container'>
      PickFurniture
      </div>
    </>
  )
}

export default PickFurniture
