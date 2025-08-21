jQuery(document).ready(function () {
  console.log("From main js");
});

const checkbox = document.getElementById("themeToggle");
const htmlTag = document.documentElement;

// Load theme from localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  htmlTag.classList.add("light");
  htmlTag.classList.remove("dark");
  checkbox.checked = true;
} else {
  htmlTag.classList.add("dark"); // default
  htmlTag.classList.remove("light");
  checkbox.checked = false;
}

// Listen for changes
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    htmlTag.classList.remove("dark");
    htmlTag.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    htmlTag.classList.remove("light");
    htmlTag.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
