// list style, product by style, room size, room kind
import {
  GET_LIST_STYLE,
  GET_LIST_STYLE_SUCCESS,
  GET_LIST_STYLE_FAIL,
  GET_LIST_ROOM_SIZE,
  GET_LIST_ROOM_SIZE_SUCCESS,
  GET_LIST_ROOM_SIZE_FAIL,
  GET_LIST_ROOM_KIND,
  GET_LIST_ROOM_KIND_SUCCESS,
  GET_LIST_ROOM_KIND_FAIL,
  GET_STYLE_PRODUCTS,
  GET_STYLE_PRODUCTS_SUCCESS,
  GET_STYLE_PRODUCTS_FAIL,
  GET_LIST_BUILDING_TYPE_SUCCESS,
  SET_ADVANCE_STYLE,
} from '../types/Style'

const INIT_STATE = {
  listStyle: [],
  listRoomSize: [],
  listRoomKind: [],
  listBuildingType: [],
  loading: false,
  advanceStyle: {},
  styleProducts: {
    'some style_id': ['array categories products'],
  },
  listOptionalCateProduct: [],
}

const Style = (state = INIT_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_LIST_STYLE:
    case GET_LIST_ROOM_SIZE:
    case GET_LIST_ROOM_KIND:
    case GET_STYLE_PRODUCTS:
      return { ...state, loading: true }

    case GET_LIST_STYLE_FAIL:
    case GET_LIST_ROOM_SIZE_FAIL:
    case GET_LIST_ROOM_KIND_FAIL:
    case GET_STYLE_PRODUCTS_FAIL:
      return { ...state, loading: false }

    case GET_LIST_STYLE_SUCCESS:
      return {
        ...state,
        loading: false,
        listStyle: [...Object.values(payload.data)],
      }

    case GET_LIST_ROOM_SIZE_SUCCESS:
      return { ...state, loading: false, listRoomSize: [...payload.data] }

    case GET_LIST_ROOM_KIND_SUCCESS:
      return { ...state, loading: false, listRoomKind: [...payload.data] }

    case GET_LIST_BUILDING_TYPE_SUCCESS:
      return { ...state, listBuildingType: [...payload.data] }

    case GET_STYLE_PRODUCTS_SUCCESS: {
      const { styleId, data, type } = payload
      const arrCategoryProduct = Object.values(data)
        .map((dt) => {
          if (dt.product_category) {
            const {
              products,
              product_category: { id, name, slug },
            } = dt

            const category = { id, name, slug }
            const productsWithCategory = products.map((product) => ({
              ...product,
              categoryId: id,
              categorySlug: slug,
            }))

            if (type === 'optional') {
              productsWithCategory.unshift({
                id: `${id}-none`, // none product: 'categoryId-none'
                price: 0,
                categoryId: id,
                categorySlug: slug,
              })
            }

            return { category, products: productsWithCategory }
          }
        })
        .filter((value) => value !== undefined)

      if (type === 'optional') {
        return {
          ...state,
          listOptionalCateProduct: arrCategoryProduct,
        }
      }

      return {
        ...state,
        loading: false,
        styleProducts: {
          ...state.styleProducts,
          [styleId]: arrCategoryProduct,
        },
      }
    }

    case SET_ADVANCE_STYLE: {
      const { data } = payload
      return {
        ...state,
        advanceStyle: {
          styleId: data,
        },
      }
    }

    default:
      return state
  }
}

export default Style
