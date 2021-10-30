import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
// import { useHistory } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

function Home() {
  // const history = useHistory()
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('features:meta_title.home')}</title>
        <meta name='description' content='' />
      </Helmet>

      <div className='home-page-container container'>
        <p>Home</p>
        <Button>Click me</Button>
      </div>
    </>
  )
}

export default Home
