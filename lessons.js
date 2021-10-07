let l = document.getElementById("lessonInfoBox").children;

function listen() {
  for (let i = 0; i <= 5; i += 2) {
    l[i].addEventListener("click", () => {
      for (let i = 1; i < l.length; i += 2) {
        l[i].style.display = "none";
      }

      for (let i = 0; i < l.length; i += 2) {
        l[i].style.backgroundColor = "white";
      }

      if (l[i + 1].style.display === "none" || l[i + 1].style.display === "") {
        l[i + 1].style.display = "block";
        l[i].style.backgroundColor = "rgb(211, 241, 250)";
      } else {
        l[i + 1].style.display = "none";
        l[i].style.backgroundColor = "white";
      }
    });
  }
}

listen();

// const lib = document.getElementById("lessonInfoBox");

// lib.addEventListener("click", (e) => {
//   console.log(e.target);
// });
