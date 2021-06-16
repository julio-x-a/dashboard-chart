import {getSaldos, drawChart} from './requests.js';

document.addEventListener('DOMContentLoaded', (e) => {
    drawChart('line', 'myChart');
    drawChart('bar', 'myChart2');
    getSaldos();
    
});


