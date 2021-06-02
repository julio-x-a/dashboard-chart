const options = {
  data: {
    labels: 'labels',
    datasets: [
      {
        type: 'bar',
        label: ' Número de Stock',
        backgroundColor: [
          // '#11a958',
          // '#196eb5',
          // '#21201e',
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
        borderWidth: 1,
        fill: true,
      },
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    lineTension: 0,
  }
};

export async function drawChart(type, canvas) {
  try {
    let res = await fetch('./php/read.php');
    let json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const ctx = document.getElementById(canvas).getContext('2d');
    const clone = Object.assign({}, options);
    clone.data.labels = json.names;
    clone.data.datasets[0].data = json.stock;
    clone.data.datasets[0].type = type;
    const myChart2 = new Chart(ctx, clone);
  } catch (err) {
    console.log(`Error: ${err}`);
  } 
}