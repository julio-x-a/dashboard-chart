const d = document;
export default async function getSaldos(){
    const $ul1 = d.querySelector('.saldos1');
    const $ul2 = d.getElementById('.saldos2 ul');
    try {
        let res = await fetch('./php/saldos.php');
        let json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        $ul1.innerHTML += `
        <ul>
            <li>SALDO EN CAJA: ${json[0]}</li>
            <li>SALDO EN INVENTARIO: ${json[3]}</li>
            <li>CANTIDAD EN INVENTARIO: ${json[4]}</li>
        </ul>`
      } catch (err) {
        console.log(`Error: ${err}`);
      } 
} 