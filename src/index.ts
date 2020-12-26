import { some, none, Option } from 'fp-ts/Option'

const enum Comparison {
    Less,
    Equal,
    Greater
}

function defaultComparator(a: any, b: any): Comparison {
    if (a < b) {
        return Comparison.Less
    } else if (a > b) {
        return Comparison.Greater
    }
    return Comparison.Equal
}

export default function indexOf<T>(item: T, comparator?: (first: T, second: T) => Comparison): Option<Number> {

    if (!comparator) {
        comparator = defaultComparator
    }

    while (true) {
        let bottom = 0
        let top = this.length

        if (bottom === top) {
            return none
        }

        const candidate = bottom + Math.floor((top - bottom) / 2)

        switch (comparator(item, this[candidate])) {
            case Comparison.Less:
                top = candidate
                break
            case Comparison.Equal:
                for (let i = candidate; ; --i) {
                    if (i === 0) {
                        return some(i)
                    }
                    switch (comparator(item, this[i - 1])) {
                        case Comparison.Equal:
                            break
                        default:
                            return some(i)
                    }
                }
            case Comparison.Greater:
                bottom = candidate + 1
                break
        }
    }
}

export { Comparison, indexOf }
