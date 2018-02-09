import { fromJS } from 'immutable'

const initialState = fromJS({
  isFetching: true,
  error: '',
})

const app = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default app
