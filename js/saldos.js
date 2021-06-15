const d = document;
export default async function getSaldos() {
  const $ul1 = d.querySelector(".saldos1");
  const $ul2 = d.querySelector(".saldos2");
  try {
    let res = await fetch("./php/saldos.php");
    let json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    $ul1.innerHTML += `
        <ol id="lista2">
            <li><a>SALDO EN CAJA: ${json[0]}</a></li>
            <li><a>SALDO EN INVENTARIO: ${json[3]}</a></li>
            <li><a>CANTIDAD EN INVENTARIO: ${json[4]}</a></li>
        </ol>`;
    $ul2.innerHTML += `
        <ol id="lista2">
            <li>TOTAL CARTERA TERCEROS: ${json[2]}</li>
            <li>TOTAL CARTERA PROVEEDORES: ${json[1]}</li>
            <li>TOTAL EGRESOS DIA: ${json[5]}</li>
        </ol>`;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
