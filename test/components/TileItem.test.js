import React from 'react'
import { shallow } from 'enzyme'
import TileItem from '../../src/components/Tiles/TileItem'

describe('TileItem suite', () => {
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
      store: mockStore
    }
    const wrapper = shallow(<TileItem {...props} />)
    expect(wrapper.length).toBe(1)
  })

  it('it renders close Icon', () => {
    const props = {
      row: 0,
      col: 1,
      store: mockStore
    }
    const wrapper = shallow(<TileItem {...props} />)
    const icon = wrapper.find('Icon')
    expect(icon.length).toBe(1)
    expect(icon.props().name).toBe('close')
  })

  it('it renders circle-outline Icon', () => {
    const props = {
      row: 0,
      col: 2,
      store: mockStore
    }
    const wrapper = shallow(<TileItem {...props} />)
    const icon = wrapper.find('Icon')
    expect(icon.length).toBe(1)
    expect(icon.props().name).toBe('circle-outline')
  })
})
