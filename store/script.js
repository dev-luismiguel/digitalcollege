document.addEventListener("DOMContentLoaded", function () {
  fetch("/store/components/menu.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("menuContainer").innerHTML = data;
    });

  fetch("/store/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footerContainer").innerHTML = data;
    });
});
