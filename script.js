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

// Animazione per il carosello delle testimonianze
gsap.from("#testimonialsCarousel", {
    duration: 1.5,           // Durata dell'animazione
    opacity: 0,              // Partenza da un'opacità di 0 (invisibile)
    y: 50,                   // Partenza da una posizione più bassa di 50px
    scrollTrigger: {
        trigger: "#testimonials",  // L'animazione si attiva quando la sezione testimonials entra in vista
        start: "top 80%",          // Inizia quando la parte superiore della sezione raggiunge l'80% della viewport
        toggleActions: "play none none none"  // Esegue l'animazione solo una volta
    }
});

// Validazione del modulo di contatto e messaggio di conferma
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impedisce l'invio del form

    // Ottieni i valori dei campi
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verifica che i campi non siano vuoti
    if (name && email && message) {
        // Mostra il messaggio di conferma
        document.getElementById('confirmationMessage').classList.remove('d-none');
        // Reset del modulo
        document.getElementById('contactForm').reset();
    } else {
        alert("Per favore, compila tutti i campi.");
    }
});

// Animazione per il modulo di contatto
gsap.from("#contact", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Animazione di entrata per la sezione FAQ
gsap.from("#faq .accordion-item", {
    duration: 1,           // Durata dell'animazione
    opacity: 0,            // Inizia da opacità 0 (invisibile)
    y: 50,                 // Inizia 50px più in basso
    stagger: 0.2,          // Ritardo tra ogni elemento
    scrollTrigger: {
        trigger: "#faq",     // Attiva l'animazione quando la sezione FAQ entra in vista
        start: "top 80%"     // Inizia quando il top della sezione è all'80% della viewport
    }
});

// Animazione di entrata per la sezione Social
gsap.from("#social a", {
    duration: 1,           // Durata dell'animazione
    opacity: 0,            // Le icone iniziano invisibili
    scale: 0.5,            // Iniziano più piccole
    stagger: 0.2,          // Ritardo tra l'entrata di ogni icona
    scrollTrigger: {
        trigger: "#social",  // Attiva l'animazione quando la sezione social entra in vista
        start: "top 80%"     // Inizia quando il top della sezione è all'80% della viewport
    }
});

