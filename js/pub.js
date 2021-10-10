fetch("json/pub.json")
  .then((r) => r.json())
  .then((d) => {
    pubwriter(d);
  });

function pubwriter(a) {
  let pb = document.getElementById("pubbox");
  let html = `
  <h2>publications</h2>
  <ul>
  `;

  for (let i = 0; i < a.length; i++) {
    html += `
    <li><em>${a[i].name}</em>, ${a[i].parent}.</li>
    `;
  }

  html += `</ul>`;
  pb.innerHTML = html;
}
