import { toNullable, isNone } from 'fp-ts/Option'
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

    it('correctly matches a singleton', () => {
        const result = indexOf.call([1], 1)
        expect(toNullable(result)).toBe(0)
    })

    it('finds max of five', () => {
        const result = indexOf.call([1,2,3,4,5], 5)
        expect(toNullable(result)).toBe(4)
    })

    it('finds min of five', () => {
        const result = indexOf.call([1,2,3,4,5], 1)
        expect(toNullable(result)).toBe(0)
    })

    it('has none of under five', () => {
        const result = indexOf.call([1,2,3,4,5], 0)
        expect(isNone(result)).toBe(true)
    })

    it('has none of exceeds five', () => {
        const result = indexOf.call([1,2,3,4,5], 6)
        expect(isNone(result)).toBe(true)
    })

    it('finds the first index match', () => {
        const result = indexOf.call([1,3,3,3,5], 3)
        expect(toNullable(result)).toBe(1)
    })
})
