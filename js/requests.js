const d = document;
const optionsChart = {
  data: {
    labels: "labels",
    datasets: [
      {
        type: "bar",
        label: " Número de Stock",
        backgroundColor: [
          // '#11a958',
          // '#196eb5',
          // '#21201e',
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    lineTension: 0,
  },
};

export async function drawChart(type, canvas) {
  try {
    let res = await fetch("../php/get/read.php");
    let json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const ctx = document.getElementById(canvas).getContext("2d");
    const clone = Object.assign({}, optionsChart);
    clone.data.labels = json.names;
    clone.data.datasets[0].data = json.stock;
    clone.data.datasets[0].type = type;
    const myChart2 = new Chart(ctx, clone);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

export async function getSaldos() {
  const $ol = d.querySelector(".saldos1");
  const $ol2 = d.querySelector(".saldos2");
  try {
    let res = await fetch("../php/get/saldos.php");
    let json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    let {
      saldoCaja,
      saldoCartProv,
      saldoCart,
      cantidadInv,
      saldoInv,
      egresos,
    } = json;
    $ol.innerHTML += `
        <ol class="lista">
            <li><a href="cuadre.html" target="_blank">SALDO EN CAJA: ${saldoCaja}</a></li>
            <li><a>SALDO EN INVENTARIO: ${saldoInv}</a></li>
            <li><a>CANTIDAD EN INVENTARIO: ${cantidadInv}</a></li>
        </ol>`;
    $ol2.innerHTML += `
        <ol class="lista">
            <li>TOTAL CARTERA TERCEROS: ${saldoCart}</li>
            <li>TOTAL CARTERA PROVEEDORES: ${saldoCartProv}</li>
            <li>TOTAL EGRESOS DIA: ${egresos}</li>
        </ol>`;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
  // const $link = document.querySelectorAll('ol li a');
  // $link.forEach(element => element.setAttribute('href', '##'));
}

export async function fillTable(table, template) {
  const d = document,
    $table = d.querySelector(table),
    $fragment = d.createDocumentFragment(),
    $template = d.getElementById('cuadre-template').content;
  try {
    let req = await fetch("../php/get/cuadre-caja.php");
    let res = await req.json();
    if (!req.ok) throw { status: res.status, statusText: res.statusText };
    res.forEach((value) => {
      let { docref, fecdoc, deb, cred, client, nomfue, coment, facfis } = value;
      $template.querySelector(".doc").textContent = docref;
      $template.querySelector(".date").textContent = fecdoc;
      $template.querySelector(".deb").textContent = deb;
      $template.querySelector(".cred").textContent = cred;
      $template.querySelector(".client").textContent = client;
      $template.querySelector(".comment").textContent = coment;
      $template.querySelector(".facfis").textContent = facfis;
      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    printError(err, $table);
  }
}

const printError = (err, element) => {
  let message = err.statusText || 'Ocurrió un error!';
  if (element) {
    element.insertAdjacentHTML(
      'afterend',
      `<span>Error: ${err.status}: ${message}</span>`
    );
  } else {
    alert(`Error ${err.status}: ${message}`);
  }
};
