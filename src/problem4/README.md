### How to run test:
- npm install
- npm test

### Solution:
```typescript
// Time Complexity: O(n), Space Complexity: O(1)
export function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Time Complexity: O(n), Space Complexity: O(n)
export function sum_to_n_b(n: number): number {
    if (n <= 0) {
        return 0;
    }
    return n + sum_to_n_b(n-1)
}

// Time Complexity: O(1), Space Complexity: O(1)
export function sum_to_n_c(n: number): number {
    if (n < 0) return 0;
    return n * (n + 1) / 2;
}
```