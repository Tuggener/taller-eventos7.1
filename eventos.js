document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("eldiv").addEventListener("click", function() {
      alert("Hola! Soy el div");
    });

    document.querySelector("button").addEventListener("click", function(event) {
      event.stopPropagation(); // Solución al problema
    });

  });