# ada_js

*Ejercicios de Análisis y Diseño de Algoritmos (ADA) - UMA*

TypeScript exercises from the Algorithm Analysis and Design (ADA) course at the University of Málaga, written in 2020. They cover divide and conquer (*divide y vencerás*, `dyv/`). Most exercises put a brute-force version next to the divide-and-conquer one. Names and comments are in Spanish.

## Exercises (`dyv/`)

| File | Problem |
| --- | --- |
| `binarySearch.ts` | Recursive binary search in a sorted array |
| `componenteCreciente.ts` | Length of the longest increasing subsequence, O(n log n) using binary search |
| `inversion.ts` | Inversions in an array: brute-force count and a merge-sort-based version |
| `matrixProduct.ts` | 2x2 matrix product and matrix power: iterative, recursive, and divide and conquer (exponentiation by squaring) |
| `mayoritario.ts` | Majority element of an array (several approaches) |
| `median.ts` | Median of two sorted arrays of equal length |
| `mergeSort.ts` | Merge sort |
| `pico.ts` | Peak of an array that increases and then decreases |
| `power.ts` | `a^n`: linear brute force and divide and conquer |
| `quickSort.ts` | Quicksort (Lomuto partition, last element as pivot); exports `quickSort` |
| `sumaDosElementos.ts` | Whether two elements add up to a given value: O(n²) and two-pointer O(n) on a sorted array |
| `sumaMaxima.ts` | Maximum contiguous subarray sum: brute force and divide and conquer |

Each file is a standalone script: it defines the functions, runs them on a hard-coded example array, and prints the intermediate steps with `console.log`.

## Running

There is no `package.json` or build setup. Run a single file with a TypeScript runner, for example:

```bash
npx ts-node dyv/quickSort.ts
```

or compile it with `tsc dyv/quickSort.ts` and run the resulting `.js` with Node.js.

## Status

Coursework, not maintained. Some exercises are unfinished or have known gaps:

- `sumaDosElementos.ts`: the divide-and-conquer version is an empty stub.
- `pico.ts`: `picoDyV` does not return the result of its recursive calls.
- `inversion.ts`: the divide-and-conquer version sorts the array and logs the inversions it finds, but does not return a count.
