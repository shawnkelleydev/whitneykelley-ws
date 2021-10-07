let l = document.getElementById("lib").children;

function listen() {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      for (let i = 1; i < l.length; i += 2) {
        l[i].style.display = "none";
        l[i - 1].style.borderRight = "solid 1px rgb(19, 64, 77)";
      }
    } else {
      for (let x = 0; x <= 4; x += 2) {
        l[x].style.borderRight = "none";
      }
    }
  });
  for (let i = 0; i <= 5; i += 2) {
    l[i].addEventListener("click", () => {
      if (window.innerWidth > 700) {
        for (let i = 1; i < l.length; i += 2) {
          l[i].style.display = "none";
        }
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
