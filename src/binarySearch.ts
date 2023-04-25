export enum Comparison {
    Less = -1,
    Equal = 0,
    Greater = 1,
}

function defaultComparator<T>(first: T, second: T): Comparison {
    if (first < second) {
        return Comparison.Less;
    } else if (first > second) {
        return Comparison.Greater;
    }
    return Comparison.Equal;
}

/**
 * Returns the index of the first occurrence of a value in an array, or the number of items less than it, if it is not present.
 * @param array An already-sorted array-like object to be searched.
 * @param searchElement The value to locate in the array.
 * @param compareFn Function used to compare array elements with the search element.
 *   It is expected to return a Comparison enum value.
 *   This argument may omitted to use JavaScript's less-than and greater-than operators for the comparison.
 */
export function binarySearchLeftmost<T>(
    array: ArrayLike<T>,
    searchElement: T,
    comparator?: (first: T, second: T) => Comparison
): number {
    if (!comparator) {
        comparator = defaultComparator;
    }

    let bottom = 0;
    let top = array.length;

    // During this iterative search process, 'top' will become the index of the lowest element which is greater-or-equal to the searched item,
    // or if all elements in the array are less than the searched item 'top' will remain at array.length.
    // Then, because 'bottom' is eventually set to the same index as 'top', it will also point to that lowest greater-or-equal-than element.
    while (bottom !== top) {
        // calculate the next position to test, halfway between bottom and top.
        const candidate = bottom + Math.floor((top - bottom) / 2);

        // Instead of comparing the return value directly with Comparison.Less,
        // this slightly more permission check allows any negative value to be accepted as indicating a Less-than result
        // This improves compatibility with functions which compute their return value using subtraction: (a - b)
        if (comparator(array[candidate], searchElement) < Comparison.Equal) {
            bottom = candidate + 1;
        } else {
            top = candidate;
        }
    }

    return bottom;
}
