import { createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  name: 'count',
  initialState: {
    count: 0
  },
  reducers: {
    add(state, { payload }) {
      state.count += payload
    },
    minus(state, { payload }) {
      state.count -= payload
    }
  }
})

const { add, minus } = counter.actions

export { add, minus }
export default counter.reducer
