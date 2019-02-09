import axios from 'axios'

const initialState = {
  candies: [],
  singleCandy: {}
}

const GOT_CANDIES = 'GOT_CANDIES'
const CANDY = 'CANDY'

export const getCandy = (candy) => ({
  type: CANDY,
  candy
})

export const getCandyThunker = (candyId) => {
  return async (dispatch) => {
    const {data} = await axios.get(`/api/candies/${candyId}`)
    dispatch(getCandy(data))
  }
}

const gotCandies = (candies) => ({
  type: GOT_CANDIES,
  candies
})

export const getCandiesThunker = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/candies')
    dispatch(gotCandies(data)) 
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CANDY: 
      // return {...state, singleCandy: state.candies.filter(candy=>candy.id===action.candyId)}
      return {...state, singleCandy: action.candy}
    case GOT_CANDIES:
      return { ...state, candies: action.candies }
    default: return state
  }
}

export default reducer