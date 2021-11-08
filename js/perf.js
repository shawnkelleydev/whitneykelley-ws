const perf = [
  {
    season: "2021-2022",
    datecode: 20211104,
    org: "Denver Philharmonic Orchestra",
    name: "The Elixir of Love",
    rep1: "Selections from Donizetti: <em>L'elisir d'amore</em>",
    rep2: "",
    rep3: "",
    datetime: "11/4 7:30pm, 11/6 3:00pm",
    cost: "Adults: $38, Senior/Student: $33",
    notes: "A collaboration with the Central City Opera.",
    link: "https://denverphilharmonic.org/production/the-elixir-of-love-in-concert/",
  },
  {
    season: "2021-2022",
    datecode: 20211217,
    org: "Denver Philharmonic Orchestra",
    name: "Holiday Cheer",
    rep1: "Featuring many holiday favorites!",
    rep2: "",
    rep3: "",
    datetime: "12/17 7:30pm, 12/18 3:00pm",
    cost: "Adults: $27, Senior: $19, Student: $12, Kids (<12): Free",
    notes:
      "A perennial favorite, featuring the Colorado Chorale and El Sistema Colorado.",
    link: "https://denverphilharmonic.org/production/holiday-cheer-2021/",
  },
  {
    season: "2021-2022",
    datecode: 20220305,
    org: "Denver Philharmonic Orchestra",
    name: "World's Fair",
    rep1: "McTee, <em>Circuits</em>",
    rep2: "Chopin, <em>Piano Concerto No. 2 in F Minor</em>",
    rep3: "Dvořák, <em>Symphony No. 9 in E Minor 'From the New World'</em>",
    datetime: "3/5 7:30pm",
    cost: "Adults: $27, Senior: $19, Student: $12, Kids (<12): Free",
    notes:
      "An exhibition of conductors and pianists, including Cuban-Spanish pianist Leonel Morales.",
    link: "https://denverphilharmonic.org/production/worlds-fair/",
  },
  {
    season: "2021-2022",
    datecode: 20220409,
    org: "Denver Philharmonic Orchestra",
    name: "Pocket Garden",
    rep1: "L. Mozart, <em>Toy Symphony</em>",
    rep2: "Ravel, <em>Ma mère l’Oye (Mother Goose) Suite</em>",
    rep3: "Celibidache, <em>Der Taschengarten (The Pocket Garden)</em> (US Premiere)",
    datetime: "4/9 7:30pm",
    cost: "Adults: $27, Senior: $19, Student: $12, Kids (<12): Free",
    notes:
      "DPO Principal Guest Conductor Mark Mast of the Bavarian Philharmonic leads this lighthearted trio of works.",
    link: "https://denverphilharmonic.org/production/pocket-garden/",
  },
  {
    season: "2021-2022",
    datecode: 20220525,
    org: "Denver Philharmonic Orchestra",
    name: "Beethoven Celebration",
    rep1: "Wittry, <em>Ode to Joy Fanfare</em>",
    rep2: "Beethoven, <em>Choral Fantasy</em>",
    rep3: "Beethoven, <em>Symphony No. 9 'Ode to Joy'</em>",
    datetime: "5/25 and 5/26, 7:30pm",
    cost: "Adults: $27, Senior: $19, Student: $12, Kids (<12): Free",
    notes:
      "A triumphal close to the DPOs 2021-2022 season.  Featuring Christie Conover (soprano), Jennifer DeDominici (mezzo), Cody Laun (tenor), Andrew Potter (bass), Andrew Cooperstock (piano), and the DYAO Strings.",
    link: "https://denverphilharmonic.org/production/beethoven-celebration-2022/",
  },
];

pwriter(perf);

function pwriter(arr) {
  let pb = document.getElementById("perfbox");
  let html = `
    <h2>performance schedule</h2>
    <h3>Denver Philharmonic 2021-2022</h3>
    <ul>
    `;
  for (let i = 0; i < arr.length; i++) {
    const datecode = arr[i].datecode;
    if (dateCheck(datecode)) {
      html += `
      <li><a href="${arr[i].link}" target="_blank" rel="noopener"><h3>${arr[i].name}</h3></a>
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
  }

  html += `</ul>`;
  pb.innerHTML = html;
}

function dateCheck(datecode) {
  let bool = true;
  var newDate = new Date();
  const year = newDate.getFullYear();
  let month = newDate.getMonth();
  let day = newDate.getDate();
  month = month + 1;
  if (month < 10) {
    month = "0" + month;
    console.log(month);
  }
  if (day < 10) {
    day = "0" + day;
  }
  let today = year + "" + month + "" + day;
  today = parseInt(today);
  if (today > datecode) {
    bool = false;
  }
  return bool;
}
