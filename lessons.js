let l = document.getElementById("lessonInfoBox").children;

function listen() {
  for (let i = 0; i <= 5; i += 2) {
    l[i].addEventListener("click", () => {
      for (let i = 1; i < l.length; i += 2) {
        l[i].style.display = "none";
      }

      if (l[i + 1].style.display === "none" || l[i + 1].style.display === "") {
        l[i + 1].style.display = "block";
        for (let x = 0; x <= 4; x += 2) {
          l[x].style.borderRight = "none";
        }
      } else {
        l[i + 1].style.display = "none";
      }
    });
  }
}

listen();

// const lib = document.getElementById("lessonInfoBox");

// lib.addEventListener("click", (e) => {
//   console.log(e.target);
// });
