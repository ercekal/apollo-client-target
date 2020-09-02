import { mockFirstNameVar, mockLastNameVar } from "./mocks/mocks";

describe('Testing mock reactive variables', () => {
  beforeEach(() => mockFirstNameVar(''));
  beforeEach(() => mockLastNameVar(''));

  it('should set the current value if provided', () => {
    mockFirstNameVar('Testing text');
    expect(mockFirstNameVar()).toBe('Testing text');
  })

  it('should overwrite the current value', () => {
    mockFirstNameVar('Testing text');
    expect(mockFirstNameVar()).toBe('Testing text');

    mockFirstNameVar('Testing text');
    expect(mockFirstNameVar()).toBe('Testing text');
  });
})