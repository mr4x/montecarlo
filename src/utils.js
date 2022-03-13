export const $ = (selector, scope = document) => scope.querySelector(selector);

export const $on = (target, type, callback, capture) => target.addEventListener(type, callback, !!capture);

export const ce = tag => document.createElement(tag);

export const unpack = (arr, prop) => arr.map(x => x[prop]);

export const round = x => x.toFixed(3);

export const rand = (min, max) => Math.random() * (max - min) + min;

export const randPoint = (min, max) => ({ x: rand(min.x, max.x), y: rand(min.y, max.y), z: rand(min.z, max.z) });

export const addPoint = (a, b) => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });

export const subPoint = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });

export const mulPoint = (p, s) => ({ x: p.x * s, y: p.y * s, z: p.z * s });

export const divPoint = (p, s) => ({ x: p.x / s, y: p.y / s, z: p.z / s });

export const zUp = p => ({ x: -p.z, y: p.x, z: p.y });

export const computeVolume = aabb => {
    const [min, max] = aabb;
    return (max.x - min.x) * (max.y - min.y) * (max.z - min.z);
};

export function generateMesh(min, max, n, fn) {
    const xStep = (max.x - min.x) / n,
        yStep = (max.y - min.y) / n,
        zStep = (max.z - min.z) / n;
    const res = [];
    for (let x = min.x; x <= max.x; x += xStep) {
        for (let y = min.y; y <= max.y; y += yStep) {
            for (let z = min.z; z <= max.z; z += zStep) {
                res.push(fn(x, y, z));
            }
        }
    }
    return res;
}

export function generatePoints(min, max, n) {
    const res = Array(n);
    for (let i = 0; i < n; i++) {
        res[i] = randPoint(min, max);
    }
    return res;
}
