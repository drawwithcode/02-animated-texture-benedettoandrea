// function to set a given theme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}
