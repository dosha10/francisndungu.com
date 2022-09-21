//local storage
let theme = localStorage.getItem("theme");
if (theme === null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

//change theme
function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "stylesheet/main.css";
  }
  if (mode === "blue") {
    document.getElementById("theme-style").href = "stylesheet/themes/blue.css";
  }
  if (mode === "green") {
    document.getElementById("theme-style").href = "stylesheet/themes/green.css";
  }
  if (mode === "purple") {
    document.getElementById("theme-style").href =
      "stylesheet/themes/purple.css";
  }

  localStorage.setItem("theme", mode);
}
