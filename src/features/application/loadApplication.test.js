import { loadApplication } from './loadApplication'
import { setLoading } from './actions'
import { mockStore } from '../../configureMockStore'
import { configurationService } from './configurationService'

jest.mock('./configurationService')

describe('loadApplication', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  it('should match actions', async () => {
    await store.dispatch(loadApplication())
    expect(store.getActions()).toEqual([
      setLoading(true),
      setLoading(false)
    ])
    expect(configurationService.loadConfigurations).toBeCalledTimes(1)
  })
})
