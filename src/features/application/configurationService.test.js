import axios from 'axios'
import { configurationService } from './configurationService'

jest.mock('axios')

describe('configurationService', () => {
  describe('when loadConfigurations', () => {
    it('should match function call', () => {
      configurationService.loadConfigurations()
      expect(axios.get).toBeCalledWith('/api/v1/configurations')
    })
  })
})
