import loadApplicationActionCreator from './loadApplicationActionCreator'
import { setLoading } from '../actions'
import { mockStore } from '../configureMockStore'

describe('loadApplicationActionCreator', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  it('should match actions', () => {
    store.dispatch(loadApplicationActionCreator())
    expect(store.getActions()).toEqual([
      setLoading(true),
      setLoading(false)
    ])
  })
})
