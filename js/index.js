import {getSaldos, drawChart, fillTable} from './requests.js';

document.addEventListener('DOMContentLoaded', (e) => {
    drawChart('line', 'myChart');
    drawChart('bar', 'myChart2');
    getSaldos();
    // fillTable('.table', 'cuadre-template');
    
});


