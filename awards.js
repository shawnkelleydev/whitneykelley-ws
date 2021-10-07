fetch("awards.json")
  .then((r) => r.json())
  .then((d) => {
    awriter(d);
  });

function awriter(a) {
  let html = `
    <h2>awards and honors</h2>
    <ul>
    `;
  let ab = document.getElementById("awardbox");
  for (let i = 0; i < a.length; i++) {
    html += `
        <li><h3>${a[i].event}</h3></li>
        <ul>
          <li>${a[i].award}, ${a[i].year}</li>
        </ul>
      `;
  }
  html += `</ul>`;
  ab.innerHTML = html;
}
