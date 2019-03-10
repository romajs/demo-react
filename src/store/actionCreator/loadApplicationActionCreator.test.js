import loadApplicationActionCreator from './loadApplicationActionCreator'
import { setLoading } from '../actions'
import { mockStore } from '../configureMockStore'
import { configurationService } from '../../service/configurationService'

jest.mock('../../service/configurationService')

describe('loadApplicationActionCreator', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  it('should match actions', async () => {
    await store.dispatch(loadApplicationActionCreator())
    expect(store.getActions()).toEqual([
      setLoading(true),
      setLoading(false)
    ])
    expect(configurationService.loadConfigurations).toBeCalledTimes(1)
  })
})
