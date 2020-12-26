import { indexOf, Comparison } from '../src'

describe('indexOf', () => {
    it('accepts missing comparator', () => {
        expect(() => indexOf.call([], 0)).not.toThrow()
    })
    it('accepts a comparator', () => {
        expect(() => indexOf.call([], 0, (a, b) => Comparison.Equal)).not.toThrow()
    })
    it('can accept a singleton non-match', () => {
        expect(() => indexOf.call([1], 0)).not.toThrow()
    })
    it('can accept a singleton match', () => {
        expect(() => indexOf.call([1], 1)).not.toThrow()
    })
})
