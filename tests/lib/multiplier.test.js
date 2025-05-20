import { test, expect } from 'vitest';
import multiply from '../../src/lib/militplier';

test('Show product of two numbers', () => {
    expect(multiply(2, 2)).toBe(4);

    expect(multiply(0, 0)).toBe(0);

    expect(multiply(-1, 4)).toBe(-4);

    expect(multiply(-2, -2)).toBe(4);

    // This test will fail
    // expect(multiply(2, 2)).toBe(5);
    
})