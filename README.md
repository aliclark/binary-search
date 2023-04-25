
# Binary Search

An implementation of Binary Search algorithm in TypeScript.

Binary search allows searching within an already-sorted array in sub-linear time relative to the array length, with `O(log n)` worst case time complexity. For more information about the algorithm and its uses, see the Wikipedia page on the [Binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm).

This package implements the [leftmost variation](https://en.wikipedia.org/wiki/Binary_search_algorithm#Procedure_for_finding_the_leftmost_element) of the algorithm in a function named `binarySearchLeftmost`. If there are multiple items of equal sorted value in the array, the index of the leftmost item is returned. If there's no item in the array equal to the searched value, then the return value is the number of elements in the array which are less than the searched value.

---

## Quick Start

Install the package:

```bash
npm install @aliclark/binary-search
```

Find the position of an item in an already-sorted array:

```typescript
import { binarySearchLeftmost } from '@aliclark/binary-search'

binarySearchLeftmost([10, 30, 30, 30, 50], 30); // 1
```

Searching with a custom comparator is also possible:

```typescript
import { binarySearchLeftmost, Comparison } from '@aliclark/binary-search'

function customComparator<T>(first: T, second: T): Comparison {
    if (first.value < second.value) {
        return Comparison.Less;
    } else if (first.value > second.value) {
        return Comparison.Greater;
    }
    return Comparison.Equal;
}

binarySearchLeftmost([{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }, { value: 50 }], { value: 40 }, customComparator) // 3
```

---

## License

- See [LICENSE](/LICENSE)
