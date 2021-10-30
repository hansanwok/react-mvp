import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { resetState, getHomeInfo } from 'redux/actions/Home'
import { getListStyle } from 'redux/actions/Style'

const languages = [
  { value: 'vi', label: 'VN' },
  { value: 'en', label: 'EN' },
]

const SelectLanguage = () => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()

  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem('lang') || languages[0].value
  )

  const onChangeLanguage = (lang) => {
    if (lang !== i18n.language) {
      localStorage.setItem('lang', lang)
      i18n.changeLanguage(lang)
      dispatch(resetState())
      dispatch(getListStyle())
      dispatch(getHomeInfo())
      setCurrentLang(lang)
    }
  }

  return (
    <div className='select-language-container'>
      {languages.map((dt) => (
        <Button
          key={dt.value}
          size='sm'
          block
          color={dt.value !== currentLang ? 'link' : 'secondary'}
          outline={dt.value === currentLang}
          onClick={() => onChangeLanguage(dt.value)}
          className='lang-btn'
        >
          {dt.label}
        </Button>
      ))}
    </div>
  )
}

export default SelectLanguage
