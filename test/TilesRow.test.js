import React from 'react'
import { shallow } from 'enzyme'
import TilesRow from '../src/components/Tiles/TilesRow'

describe('TilesRow suite', () => {
  let mockStore
  beforeEach(() => {
    mockStore = {
      gameState: [
        [0, 1, -1],
        [0, 0, 0],
        [0, 0, 0]
      ]
    }
  })

  it('it renders correctly', () => {
    const props = {
      row: 0,
      col: 1,
      store: mockStore,
      styles: {
        styleItemLeft: '',
        styleItemCenter: '',
        styleItemRight: ''
      }
    }
    const wrapper = shallow(<TilesRow {...props} />)
    expect(wrapper.length).toBe(1)
  })

  it('Children rendered correclty', () => {
    const props = {
      row: 0,
      col: 1,
      store: mockStore,
      styles: {
        styleItemLeft: '',
        styleItemCenter: '',
        styleItemRight: ''
      }
    }
    const wrapper = shallow(<TilesRow {...props} />)
    const TileItems = wrapper.find('Tile')
    expect(TileItems).toHaveLength(3)
  })
})
