jQuery(document).ready(function () {
  $(document).ready(function () {
    // Theme Switcher
    const $checkbox = $("#themeToggle");
    const $htmlTag = $("html");

    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      $htmlTag.addClass("light").removeClass("dark");
      $checkbox.prop("checked", true);
    } else {
      $htmlTag.addClass("dark").removeClass("light"); // default
      $checkbox.prop("checked", false);
    }

    // Listen for changes
    $checkbox.on("change", function () {
      if ($checkbox.is(":checked")) {
        $htmlTag.removeClass("dark").addClass("light");
        localStorage.setItem("theme", "light");
      } else {
        $htmlTag.removeClass("light").addClass("dark");
        localStorage.setItem("theme", "dark");
      }
    });
    // Sticy
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 50) {
        $("#navbar").addClass("sticky_navbar");
      } else {
        $("#navbar").removeClass("sticky_navbar");
      }
    });
  });
});
