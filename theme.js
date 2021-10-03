// function to set a given theme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

var metaThemeColor = document.querySelector("meta[name=theme-color]");

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "dark") {
    setTheme("light");
    metaThemeColor.setAttribute("content", "#ffffff");
  } else {
    setTheme("dark");
    metaThemeColor.setAttribute("content", "#000000");
  }
}
