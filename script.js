const options = {
  type: 'pie',
  data: {
    labels: 'labels',
    datasets: [
      {
        label: ' Número de Stock',
        data: 'data',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
      }
    ]
  }
};
let myChart;

async function getAll(options) {
  try {
    let res = await fetch('./php/read.php');
    let json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    options.data.labels = json.names;
    options.data.datasets[0].data = json.stock;
    const ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, options);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

document.addEventListener('DOMContentLoaded', getAll(options));
document.addEventListener('click', (e) => {
  if (e.target.matches('#chart-bar')) {
    myChart.destroy();
    options.type = 'bar';
    getAll(options);
  }
  if (e.target.matches('#chart-pie')) {
    myChart.destroy();
    options.type = 'pie';
    getAll(options);
  }
});
