import { createGlobalState } from 'react-hooks-global-state'


const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  isLogged : false,
  sideBar : false,
  Auth : 'Buyer',
  categories : [],
  user : {},
  notification : {},
  gallery : {},
  categoryId : null,
  attributes : [],
  brands : "",
  colors : [],
  size : [],
  gender : [],
  tags : [],
  guest : true,
  provider : "Youtube",
  discount : "Flat",
  isload : false,
  slug : null,
  delivery : 1,
  description : []
})

export { getGlobalState, useGlobalState, setGlobalState }