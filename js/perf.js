fetch("json/perf.json")
  .then((r) => r.json())
  .then((d) => {
    pwriter(d);
  });

function pwriter(arr) {
  let pb = document.getElementById("perfbox");
  let html = `
    <h2>performance schedule</h2>
    <h3>Denver Philharmonic 2021-2022</h3>
    <ul>
    `;
  for (let i = 0; i < arr.length; i++) {
    html += `
    <li><a href="${arr[i].link}" target="_blank"><h3>${arr[i].name}</h3></a>
      <ul>
        <li>${arr[i].datetime}</li>
        <li>${arr[i].notes}</li>
        <ul>
          <li>${arr[i].rep1}</li>
          <li>${arr[i].rep2}</li>
          <li>${arr[i].rep3}</li>
        </ul>
        <li>${arr[i].cost}</li>
      </ul>
    </li>`;
  }
  html += `</ul>`;
  pb.innerHTML = html;
}
