/* -----------------

      Content

----------------- */

const ready = `
  <p>
    Emotional readiness is crucial. Is your child eager to learn new
    tasks? Do they get frustrated and give up easily, or do they
    show commitment to learning? Are they able to focus for 30
    minutes at a time? Do they want to play the flute?
  </p>
  <p>
    Do you and your child have the time? Learning music takes a real
    time commitment in daily practicing, attending lessons, and
    involvement in special events throughout the year. Because
    parental involvement is such a crucial part of the Suzuki
    philosophy, this would require you to not only be present for
    each of these areas, but also to be actively involved.
  </p>
  <p>
    Are you willing to make a long-term commitment? Learning music
    is rewarding, but it is also a process that takes time. In the
    beginning, establishing fundamentals can sometimes seem to take
    forever, but the work pays off down the road. Are you willing to
    stick through the frustrating periods as well as the exciting
    ones?
  </p>
  <p>
    Do lessons fit your budget? In addition to the studio tuition
    rate, families must be prepared to buy or rent an instrument,
    purchase Suzuki music/CDs and other materials, and be prepared
    to invest in opportunities outside the studio.
  </p>
  <p>
    Come observe a lesson! I highly encourage prospective students
    to observe one of my current students in their lesson so that
    you can get a feel for my teaching style and the child can be
    sure that learning the flute is something that they really want
    to pursue.
  </p>
`;

const inPerson = `
  <p>
    My flute studio is based in the Denver Metro area, and I offer
    weekly private lessons to students from the age of 4 through
    adult seniors. I teach using the Suzuki Method, an approach that
    has been validated by many research studies as a very effective
    way to learn music (as well as other life-skills). The Suzuki
    Method is unique because it approaches music learning with the
    same principles as language acquisition. Specifically, it
    utilizes listening/imitation, repetition, delayed reading,
    creating a nurturing and supportive learning environment,
    building new skills with music already learned, and active
    parent involvement. Just as children learn language from a very
    young age, they can also begin to learn music when they are
    young. In fact, the early years are developmentally a crucial
    time for developing mental processes and muscle coordination,
    and music lessons are an effective way to maximize the child’s
    potential during this time of their life. The principles of the
    Suzuki Method not only provide a framework for learning new
    skills in young and beginner students, but they are also very
    effective for advanced players as they learn to perfect advanced
    skills and, nurture their own creativity and musical voice, and
    perform at a professional level.
  </p>
  <p>
    Although learning music is a primary goal of my studio, I also
    strive to teach students how to use music as a tool of
    expression, communication, and connection. Students will be
    challenged to build problem-solving skills, cultivate attention
    to detail, navigate complex mental and physical tasks, and
    develop resilience, perseverance, confidence, and self-efficacy.
    Even after students graduate or move on from my studio, they
    have a deep sense of pride and joy in music that sticks with
    them for a lifetime.
  </p>
`;

const online = `
  <p>
    I offer a limited number of weekly live Skype lessons for
    intermediate and advanced students who are unable to attend
    lessons at any of my studio locations.
  </p>
  <p>Requirements for Skype lessons:</p>
  <ul>
    <li>
      A quiet, well-lit space with good internet access during your
      lesson time
    </li>
    <li>
      A webcam with a good built-in microphone (built in or
      external; please contact me for recommendations) that can be
      set up so that I can see your full upper body
    </li>
    <li>
      A large screen (no phones!) so that you can see me clearly.
    </li>
    <li>A music stand</li>
    <li>
      A metronome and tuner (there are many phone apps that can work
      for this; please ask for recommendations if you do not already
      have them)
    </li>
  </ul>
  <p>
    Recommended Equipment (these are not required but will help your
    lesson experience):
  </p>
  <ul>
    <li>Extrenal microphone</li>
    <li>External speakers</li>
  </ul>
  <p>
    Please contact me about available times, and rates. Students are
    also encouraged to sign up for one in-person lesson at any of my
    studio locations each month to receive more hands-on instruction
    (which will balance out this limitation in online lessons).
  </p>
`;

/* -------------------

      Callbacks

------------------- */

function writeInfo(info, section) {
  section.innerHTML = info;
}

/* ---------------

      Mobile

--------------- */

const lessonsMobile = document.getElementById("lessons-mobile").children;

writeInfo(ready, lessonsMobile[1]);
writeInfo(inPerson, lessonsMobile[3]);
writeInfo(online, lessonsMobile[5]);

function mobileListen() {
  for (let i = 0; i <= 5; i += 2) {
    lessonsMobile[i].addEventListener("click", () => {
      if (
        lessonsMobile[i + 1].style.display === "none" ||
        lessonsMobile[i + 1].style.display === ""
      ) {
        lessonsMobile[i + 1].style.display = "block";
        lessonsMobile[i].style.backgroundColor = "rgb(211, 241, 250)";
      } else {
        lessonsMobile[i + 1].style.display = "none";
        lessonsMobile[i].style.backgroundColor = "white";
      }
    });
  }
}

mobileListen();

/* ---------------

      Large

--------------- */

const lessonsFullScreen = document.getElementById(
  "lessons-full-screen"
).children;

const infoLI = lessonsFullScreen[1].children[0].children;

writeInfo(ready, infoLI[0]);
writeInfo(inPerson, infoLI[1]);
writeInfo(online, infoLI[2]);

//listen for clicks / show content

const menuLI = lessonsFullScreen[0].children[0].children;

lessonsFullScreen[0].addEventListener("click", (e) => {
  let target = e.target;
  if (target.tagName === "LI") {
    //cancel previous displays
    for (let i = 0; i < menuLI.length; i++) {
      infoLI[i].style.display = "none";
      menuLI[i].style.backgroundColor = "white";
    }
    //process clicks
    target.style.backgroundColor = "rgb(211, 241, 250)";
    lessonInfoDisplayLoop(target, "block");
  }
});

function lessonInfoDisplayLoop(target, displayType) {
  for (let i = 0; i < menuLI.length; i++) {
    if (target === menuLI[i]) {
      infoLI[i].style.display = displayType;
    }
  }
}
