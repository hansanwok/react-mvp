export const formatMoney = (value, fixedDigits = 2) => {
  // const lang = localStorage.getItem('lang')
  const number = Number(value)
  let displayPrice = value
  // integer
  if (Number.isInteger(number)) {
    displayPrice = new Intl.NumberFormat().format(number)
  }
  // float
  if (!Number.isInteger(number)) {
    const fixNumber = Number(number.toFixed(fixedDigits))
    displayPrice = new Intl.NumberFormat().format(fixNumber)
  }

  // if (lang === 'en') {
  //   displayPrice = `$${displayPrice}`
  // } else if (lang === 'vi') {
  //   displayPrice = `${displayPrice}₫`
  // }

  displayPrice = `${displayPrice} ₫`

  return displayPrice
}

export const isVietnamesePhoneNumber = (number) => {
  return /([+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(number)
}

export const getBase64Image = (base64) => `data:image/png;base64,${base64}`

export const isValidEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const isValid = regex.test(String(email).toLowerCase())
  return isValid
}

export const isValidForm = (error = {}) =>
  Object.values(error).every((err) => !err)
