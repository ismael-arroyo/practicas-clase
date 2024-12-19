window.onload = function () {
  // Dividir el texto en caracteres
  const titulo = new SplitType("#titulo-principal", { types: "chars" });

  // Animación de las letras
  gsap.from(titulo.chars, {
    opacity: 0,
    y: 50,
    stagger: 0.05,
    duration: 0.5,
    ease: "power4.out",
    onComplete: () => {
      // Animación secuencial de las palabras resaltadas
      const highlights = document.querySelectorAll(".highlight");
      highlights.forEach((highlight, index) => {
        gsap.to(highlight, {
          onStart: () => {
            highlight.classList.add("active"); // Activa la animación del rectángulo
          },
          delay: index * 0.5, // Retraso entre cada animación
        });
      });
    },
  });
};
