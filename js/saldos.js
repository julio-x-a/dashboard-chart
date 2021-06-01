async function getSaldos(options){
    try {
        let res = await fetch('./php/saldos.php');
        let json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        const ctx = document.getElementById('myChart2').getContext('2d');
        options.data.labels = json.names;
        options.data.datasets[0].data = json.stock;
        const myChart2 = new Chart(ctx, options);
      } catch (err) {
        console.log(`Error: ${err}`);
      } 
} 