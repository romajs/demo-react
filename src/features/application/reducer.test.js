import reducer from './reducer'
import * as actions from './actions'

describe('reducer', () => {
  describe('when no action', () => {
    it('should match initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        loading: false
      })
    })
  })

  describe('when SET_LOADING from initial state', () => {
    it('should match state', () => {
      const action = actions.setLoading(true)
      expect(reducer(undefined, action)).toEqual({
        loading: true
      })
    })
  })

  describe('when SET_LOADING with previous state', () => {
    it('should match state', () => {
      const action = actions.setLoading(false)
      expect(reducer({ loading: true }, action)).toEqual({
        loading: false
      })
    })
  })
})
