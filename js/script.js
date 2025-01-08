window.onload = function () {
  // Estado inicial de las flores (ocultas)
  gsap.set([".flor-1", ".flor-2", ".flor-3", ".flor-4"], {
    opacity: 0,
    scale: 0.2,
  });

  // Tu animación existente del título
  const titulo = new SplitType("#titulo-principal", { types: "chars" });

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
            highlight.classList.add("active");
          },
          delay: index * 0.5,
        });
      });
    },
  });

  // Nueva animación para las flores con el click del botón
  const missionButton = document.querySelector(".mission-button");

  missionButton.addEventListener("click", () => {
    const timeline = gsap.timeline();

    timeline
      .to(".flor-1", {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .to(
        ".flor-2",
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      )
      .to(
        ".flor-3",
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      )
      .to(
        ".flor-4",
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

    // Opcional: deshabilitar el botón después de la animación
    missionButton.disabled = true;
    gsap.to(missionButton, {
      opacity: 0.7,
      duration: 0.3,
    });
  });

  // Carrusel
};
