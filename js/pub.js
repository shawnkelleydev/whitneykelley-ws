const pub = [
  {
    name: "Practice What You Think: The Value and Application of Mental Strategies in Practice and Performance of Programmatic Music",
    parent: "master's thesis, university of colorado",
    year: 2011,
  },
  {
    name: "Practice What You Think: Strengthening Musical Learning through Mental Strategies",
    parent:
      "<a href='https://www.fluteworld.com/product/flutists-handbook-a-pedagogy-anthologyv-2/' target='_blank' rel='noopener'><em>national flute association pedagogy anthology, volume 2</em></a>",
    year: 2012,
  },
  {
    name: "an introduction to learning assessment for studio music teachers: two-part activity and evaluation",
    parent: "pedagogy thesis, university of colorado",
    year: 2012,
  },
  {
    name: "The Resilient Musician: Developing Student Resilience in the College/Conservatory Music Studio",
    parent: "doctoral dissertation, university of colorado",
    year: 2013,
  },
  {
    name: "<a href='https://suzukiassociation.org/news/cd-review-jinju-by-laura-larson-flute/' target='_blank' rel='noopener'>CD Review: Jinju by Laura Larson, Flute</a>",
    parent: "<em>American Suzuki Journal</em> 41.3",
    year: 2013,
  },
  {
    name: "<a href='https://suzukiassociation.org/news/learning-more-than-music-influence-suzuki/' target='_blank' rel='noopener'>Learning More Than Music: The Influence of the Suzuki Method in the Life and Career of Dr. Whitney Kelley</a>",
    parent: "<em>American Suzuki Journal</em> 41.4",
    year: 2013,
  },
  {
    name: "Cultivating Beautiful Hearts in the Face of Adversity",
    parent: "Lecture, 16th Biennial SAA Conference, Minneapolis, MN",
    year: 2014,
  },
  {
    name: "<a href='https://thefluteexaminer.com/4-questions-whitney-kelley-suzuki-method-advanced-topics-beginners/' target='_blank' rel='noopener'>4 Questions for Whitney Kelley: The Suzuki Method, Advanced Topics for Beginners, and More</a>",
    parent: "<em>Flute Examiner</em>",
    year: 2016,
  },
];

function pubwriter(arr) {
  let pb = document.getElementById("pubbox");
  let html = `
  <h2>publications</h2>
  <ul>
  `;

  for (let i = 0; i < arr.length; i++) {
    html += `
    <li><em>${arr[i].name}</em>, ${arr[i].parent}.</li>
    `;
  }

  html += `</ul>`;
  pb.innerHTML = html;
}

pubwriter(pub);
