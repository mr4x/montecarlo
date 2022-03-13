const sqrt = Math.sqrt;

export const V = [
    {
        fns: [
            (x, y, z) => ({ x, y: 16 * sqrt(2 * x), z }),
            (x, y, z) => ({ x, y: sqrt(2 * x), z }),
            (x, y, z) => ({ x, y, z: 0 }),
            (x, y, z) => ({ x, y, z: 2 - x }),
        ],
        aabb: [
            { x: 0, y: 0, z: 0 },
            { x: 2, y: 32, z: 2 },
        ],
        isInside: ({ x, y, z }) => {
            return x >= 0 && x <= 2 && z >= 0 && z <= 2 - x && y >= sqrt(2 * x) && y <= 16 * sqrt(2 * x);
        },
    },
    {
        fns: [
            (x, y, z) => ({ x, y: 5 * sqrt(x), z }),
            (x, y, z) => ({ x, y: (5 * x) / 3, z }),
            (x, y, z) => ({ x, y, z: 0 }),
            (x, y, z) => ({ x, y, z: 5 + (5 * sqrt(x)) / 3 }),
        ],
        aabb: [
            { x: 0, y: 0, z: 0 },
            { x: 9, y: 15, z: 9 },
        ],
        isInside: ({ x, y, z }) => {
            return z >= 0 && z <= 5 + (5 * sqrt(x)) / 3 && y >= (5 * x) / 3 && y <= 5 * sqrt(x) && x >= 0 && x <= 9;
        },
    },
    {
        fns: [
            (x, y, z) => ({ x: 19 * sqrt(2 * y), y, z }),
            (x, y, z) => ({ x: 4 * sqrt(2 * y), y, z }),
            (x, y, z) => ({ x, y, z: 0 }),
            (x, y, z) => ({ x, y, z: 2 - y }),
        ],
        aabb: [
            { x: 0, y: 0, z: 0 },
            { x: 38, y: 2, z: 2 },
        ],
        isInside: ({ x, y, z }) => {
            return y >= 0 && y <= 2 && x >= 4 * sqrt(2 * y) && x <= 19 * sqrt(2 * y) && z >= 0 && z <= 2 - y;
        },
    },
    {
        fns: [
            (x, y, z) => ({ x, y: 2 - x, z }),
            (x, y, z) => ({ x, y: sqrt(x), z }),
            (x, y, z) => ({ x, y, z: 12 * y }),
            (x, y, z) => ({ x, y, z: 0 }),
        ],
        aabb: [
            { x: 0, y: 0, z: 0 },
            { x: 2, y: 2, z: 24 },
        ],
        isInside: ({ x, y, z }) => {
            return x >= 0 && x <= 2 && y <= 2 - x && y <= sqrt(x) && z >= 0 && z <= 12 * y;
        },
    },
    {
        fns: [
            (x, y, z) => ({ x: 20 * sqrt(2 * y), y, z }),
            (x, y, z) => ({ x: 5 * sqrt(2 * y), y, z }),
            (x, y, z) => ({ x, y, z: 0 }),
            (x, y, z) => ({ x, y, z: 1 / 2 - y }),
        ],
        aabb: [
            { x: 0, y: 0, z: 0 },
            { x: 20, y: 1 / 2, z: 1 / 2 },
        ],
        isInside: ({ x, y, z }) => {
            return y >= 0 && y <= 2 && x >= 5 * sqrt(2 * y) && x <= 20 * sqrt(2 * y) && z >= 0 && z <= 1 / 2 - y;
        },
    },
    {
        fns: [
            (x, y, z) => ({ x: (5 * sqrt(y)) / 2, y, z }),
            (x, y, z) => ({ x: (5 * y) / 6, y, z }),
            (x, y, z) => ({ x, y, z: 0 }),
            (x, y, z) => ({ x, y, z: (5 * (3 + sqrt(y))) / 6 }),
        ],
        aabb: [
            { x: 0, y: 0, z: 0 },
            { x: 7.5, y: 9, z: 5 },
        ],
        isInside: ({ x, y, z }) => {
            return (
                y >= 0 && y <= 9 && x <= (5 * sqrt(y)) / 2 && x >= (5 * y) / 6 && z >= 0 && z <= (5 * (3 + sqrt(y))) / 6
            );
        },
    },
    {
        fns: [
            (x, y, z) => ({ x: (5 * sqrt(y)) / 6, y, z }),
            (x, y, z) => ({ x: (5 * y) / 18, y, z }),
            (x, y, z) => ({ x, y, z: 0 }),
            (x, y, z) => ({ x, y, z: (5 * (3 + sqrt(y))) / 18 }),
        ],
        aabb: [
            { x: 0, y: 0, z: 0 },
            { x: 2.5, y: 9, z: 5 / 3 },
        ],
        isInside: ({ x, y, z }) => {
            return (
                y >= 0 &&
                y <= 9 &&
                x <= (5 * sqrt(y)) / 6 &&
                x >= (5 * y) / 18 &&
                z >= 0 &&
                z <= (5 * (3 + sqrt(y))) / 18
            );
        },
    },
    {
        fns: [
            (x, y, z) => ({ x: 2 - y, y, z }),
            (x, y, z) => ({ x: sqrt(y), y, z }),
            (x, y, z) => ({ x, y, z: (12 * x) / 5 }),
            (x, y, z) => ({ x, y, z: 0 }),
        ],
        aabb: [
            { x: 0, y: 0, z: 0 },
            { x: 1, y: 1, z: 12 / 5 },
        ],
        isInside: ({ x, y, z }) => {
            return y >= 0 && y <= 1 && x <= 2 - y && x <= sqrt(y) && z >= 0 && z <= (12 * y) / 5;
        },
    },
    {
        fns: [
            (x, y, z) => ({ x, y: 17 * sqrt(2 * x), z }),
            (x, y, z) => ({ x, y: 2 * sqrt(2 * x), z }),
            (x, y, z) => ({ x, y, z: 0 }),
            (x, y, z) => ({ x: 1 / 2 - z, y, z }),
        ],
        aabb: [
            { x: 0, y: 0, z: 0 },
            { x: 1 / 2, y: 17, z: 1 / 2 },
        ],
        isInside: ({ x, y, z }) => {
            return x >= 0 && x <= 1 / 2 && z >= 0 && z <= 1 / 2 - x && y >= 2 * sqrt(2 * x) && y <= 17 * sqrt(2 * x);
        },
    },
];
