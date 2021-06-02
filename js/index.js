import {drawChart} from './script.js';
import getSaldos from './saldos.js';

document.addEventListener('DOMContentLoaded', (e) => {
    drawChart('line', 'myChart');
    drawChart('bar', 'myChart2');
    getSaldos();
    
});