import { binarySearchLeftmost, Comparison } from '../src'

describe('binarySearchLeftmost', () => {

    it('returns zero for an empty array', () => {
        const result = binarySearchLeftmost([], 10)
        expect(result).toBe(0)
    })

    it('returns zero for a matched single array element', () => {
        const result = binarySearchLeftmost([10], 10)
        expect(result).toBe(0)
    })

    it('returns zero for an un-matched single array element which is greater than the search element', () => {
        const result = binarySearchLeftmost([10], 4)
        // indicates that there were no elements in the array which were less than the searched element
        expect(result).toBe(0)
    })

    it('returns one for an un-matched single array element which is less than the search element', () => {
        const result = binarySearchLeftmost([10], 20)
        // indicates that there was one element in the array which was less than the searched element
        expect(result).toBe(1)
    })

    it('finds the maximum element of five', () => {
        const result = binarySearchLeftmost([10, 20, 30, 40, 50], 50)
        expect(result).toBe(4)
    })

    it('finds the minimum element of five', () => {
        const min = 10;
        const result = binarySearchLeftmost([min, min + 1, min + 2, min + 3, min + 4], min)
        expect(result).toBe(0)
    })

    it('returns zero when the search element is un-matched and less than all of five array elements', () => {
        const result = binarySearchLeftmost([10, 20, 30, 40, 50], 8)
        expect(result).toBe(0)
    })

    it('returns five when the search element is un-matched and greater than all of five array elements', () => {
        const result = binarySearchLeftmost([10, 20, 30, 40, 50], 60)
        expect(result).toBe(5)
    })

    it('finds the first matching array element when there are multiple matches for the search element', () => {
        const result = binarySearchLeftmost([10, 20, 30, 30, 30, 30, 30, 30, 50], 30)
        expect(result).toBe(2)
    })

    it('finds a matching array element using a custom comparator function', () => {
        const result = binarySearchLeftmost([{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }, { value: 50 }], { value: 40 }, (first, second) => first.value < second.value ? Comparison.Less : (first.value > second.value ? Comparison.Greater : Comparison.Equal))
        expect(result).toBe(3)
    })
})
