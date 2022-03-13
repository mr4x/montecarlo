import Zdog from 'zdog';

import { Color } from './colors';
import { V } from './data';
import { generateMesh, subPoint, divPoint, zUp, generatePoints, computeVolume, $, $on, ce } from './utils';

const PLOT_SIZE = 800 / Math.sqrt(3);

let total = 50000,
    variant = 0;

function computeVariant() {
    const v = V[variant];
    const [min, max] = v.aabb;

    const xScale = x => (x * PLOT_SIZE) / (max.x - min.x);
    const yScale = y => (y * PLOT_SIZE) / (max.y - min.y);
    const zScale = z => (z * PLOT_SIZE) / (max.z - min.z);

    const scalePoint = p => ({ x: xScale(p.x), y: yScale(p.y), z: zScale(p.z) });

    const offset = divPoint(subPoint(max, min), 2);

    function addBox(plot) {
        new Zdog.Box({
            addTo: plot,
            width: xScale(max.x - min.x),
            height: yScale(max.y - min.y),
            depth: zScale(max.z - min.z),
            color: Color.BLACK(0.1),
            stroke: 1,
            fill: false,
        });
    }

    // SURFACES

    const surfacePlot = createPlot('#surfaces');
    addBox(surfacePlot);

    const generateSurfaces = () => v.fns.map(fn => generateMesh(min, max, 10, fn));

    const surfaces = generateSurfaces();
    const colors = [Color.BLUE(), Color.RED(), Color.GREEN(), Color.BLACK()];
    for (let i = 0; i < surfaces.length; i++) {
        for (const p of surfaces[i]) {
            new Zdog.Shape({
                addTo: surfacePlot,
                translate: zUp(scalePoint(subPoint(p, offset))),
                stroke: 2,
                color: colors[i],
            });
        }
    }

    // VOLUME

    const volumePlot = createPlot('#volume');
    addBox(volumePlot);

    let count = 0;
    const points = generatePoints(min, max, total);
    for (const p of points) {
        const isInside = v.isInside(p);
        if (isInside) {
            count++;
            new Zdog.Shape({
                addTo: volumePlot,
                translate: zUp(scalePoint(subPoint(p, offset))),
                stroke: 2,
                color: Color.GOLD(),
            });
        }
    }

    const volume = computeVolume(v.aabb);

    $('#result').textContent = `Точек в фигуре: ${count} из ${total}, объём: ${(volume * count) / total} из ${volume}`;
}
computeVariant();

$on($('#variant'), 'change', ev => {
    const $el = ev.target;
    variant = +$el.options[$el.selectedIndex].value;
    computeVariant();
});

$on($('#points'), 'change', ev => {
    const $el = ev.target;
    total = +$el.options[$el.selectedIndex].value;
    computeVariant();
});

// CANVAS SETUP

function createPlot(element) {
    let isSpinning = true;

    const plot = new Zdog.Illustration({
        element,
        rotate: { y: Zdog.TAU / 8, x: -Zdog.TAU / 12, z: Zdog.TAU / 4 },
        dragRotate: true,
        onDragStart: function () {
            isSpinning = false;
        },
        onDragEnd: function () {
            isSpinning = true;
        },
    });

    function animate() {
        if (isSpinning) {
            plot.rotate.y += 0.01;
        }
        plot.updateRenderGraph();
        requestAnimationFrame(animate);
    }
    animate();

    return plot;
}
