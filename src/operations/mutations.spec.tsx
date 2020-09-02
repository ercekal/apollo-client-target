
import updateInput from './mutations'
import { mockFirstNameVar } from '../tests/mocks/mocks';

describe('updateInput hook', () => {
  beforeEach(() => mockFirstNameVar());

  it('should update the input', () => {
    updateInput(mockFirstNameVar('Test text'), 'fname')
    expect(
      mockFirstNameVar()
    ).toBe('Test text')
  })
})
