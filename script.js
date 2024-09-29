// GSAP Test: Animazione di entrata per il titolo del prodotto
gsap.from(".titolo-prodotto", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});
// Animazione di entrata per le card nella sezione "Caratteristiche del Prodotto"
// Le card appaiono con un effetto di scorrimento verso il basso e dissolvenza
gsap.from(".card", {
    duration: 1,           // Durata dell'animazione in secondi
    opacity: 0,            // Partenza da un'opacità di 0 (invisibile)
    y: 50,                 // Le card partono da una posizione più bassa di 50px
    stagger: 0.2,          // Ritardo tra l'entrata di ogni card (0.2 secondi)
    scrollTrigger: {
        trigger: "#features", // L'animazione si attiva quando la sezione #features entra in vista
        start: "top 80%",     // Inizia quando la parte superiore della sezione raggiunge l'80% della viewport
        toggleActions: "play none none none"  // L'animazione viene eseguita solo una volta
    }
});
