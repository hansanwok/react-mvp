export const SLUG = {
  roomSize: {
    en: 'bathroom-sizes',
    vi: 'bathroom-sizes-vi',
  },
  roomKind: {
    en: 'bathroom-layouts',
    vi: 'bathroom-layouts-vi',
  },
  buildingType: {
    en: 'building-types',
    vi: 'building-types-vi',
  },
  tileCategory: 'tile'
}

export const getSlug = (slugProp) => {
  const lang = localStorage.getItem('lang') || 'vi'
  return SLUG[slugProp][lang]
}

export const ROUTES = {
  home: '/',
  roomSize: '/room-size',
  pickFurniture: '/pick-furniture',
  period: '/project-period',
  userForm: '/user-form',
  orderSuccess: '/order-success'
}

export const ROOM_SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const ROOM_SIZE_DIMENSION = {
  [ROOM_SIZE.small]: {
    width: 1.2,
    length: 2,
    height: 2.7,
  },
  [ROOM_SIZE.medium]: {
    width: 1.8,
    length: 2.7,
    height: 2.7,
  },
  [ROOM_SIZE.large]: {
    width: 2,
    length: 3.5,
    height: 2.7,
  }
}

export const LIST_PERIOD = {
  asap: 'asap',
  short: 'short', // 2 - 3
  mid: 'mid', // 4 - 6
  far: 'far', // 6- 12
  unknown: 'unknown'
}
