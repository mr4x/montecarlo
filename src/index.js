import Plotly from 'plotly.js-gl3d-dist';

import { Color } from './colors';
import { V } from './data';
import { generateMesh, generatePoints, computeVolume, $, $on, round, unpack } from './utils';

let total = 100,
    variant = 0;

function computeVariant() {
    const v = V[variant];
    const [min, max] = v.aabb;

    // SURFACES

    const generateSurfaces = () => v.fns.map(fn => generateMesh(min, max, 10, fn));

    const data1 = [];

    const surfaces = generateSurfaces();
    const colors = [Color.BLUE(), Color.RED(), Color.GREEN(), Color.BLACK()];
    for (let i = 0; i < surfaces.length; i++) {
        const points = surfaces[i];
        data1.push({
            x: unpack(points, 'x'),
            y: unpack(points, 'y'),
            z: unpack(points, 'z'),
            type: 'scatter3d',
            mode: 'markers',
            marker: {
                size: 2,
                color: colors[i],
            },
        });
    }

    // VOLUME

    const points = generatePoints(min, max, total);
    const pointsInside = points.filter(p => v.isInside(p));
    const count = pointsInside.length;

    const data2 = [
        {
            x: unpack(pointsInside, 'x'),
            y: unpack(pointsInside, 'y'),
            z: unpack(pointsInside, 'z'),
            type: 'scatter3d',
            mode: 'markers',
            marker: {
                size: 2,
                color: Color.PURPLE(),
            },
        },
    ];

    const layout = { showlegend: false, width: 800, height: 800 };

    Plotly.newPlot('surfaces', data1, layout);
    Plotly.newPlot('volume', data2, layout);

    const volume = computeVolume(v.aabb);
    const computedVolume = (volume * count) / total;
    const absDiff = Math.abs(v.integral - computedVolume);

    $('#result').textContent = `Точек в фигуре: ${count} из ${total} (${round(
        (100 * count) / total
    )}%), объём: ${computedVolume} из ${volume}. Точное значение: ${
        v.integral
    } абсолютная погрешность: ${absDiff} относительная: ${(100 * absDiff) / computedVolume}%`;
}
computeVariant();

$on($('#variant'), 'change', ev => {
    const $el = ev.target;
    variant = +$el.options[$el.selectedIndex].value;
    $('.integral img').src = `v${variant + 1}.jpg`;
    computeVariant();
});

$on($('#points'), 'change', ev => {
    const $el = ev.target;
    total = +$el.options[$el.selectedIndex].value;
    computeVariant();
});
