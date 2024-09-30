// Registra il plugin ScrollTrigger per abilitarne l'uso con GSAP
gsap.registerPlugin(ScrollTrigger);

// Animazione per il titolo del prodotto
gsap.from(".titolo-prodotto", {
    duration: 1,          // Durata dell'animazione di 1 secondo
    opacity: 0,           // Il titolo inizia invisibile
    y: -50,               // Il titolo parte spostato di 50px verso l'alto
    ease: "power2.out"    // Tipo di easing per un'entrata fluida
});

// Animazione per le card nella sezione "Caratteristiche del Prodotto"
gsap.from(".card", {
    duration: 1,           // Durata dell'animazione di 1 secondo
    opacity: 0,            // Le card iniziano invisibili
    y: 50,                 // Le card appaiono scorrendo verso l'alto di 50px
    stagger: 0.2,          // Le card appaiono una dopo l'altra con un ritardo di 0.2 secondi
    scrollTrigger: {       // L'animazione si attiva allo scroll
        trigger: "#features",  // La sezione che innesca l'animazione è "#features"
        start: "top 80%",      // L'animazione inizia quando il top della sezione raggiunge l'80% della viewport
        toggleActions: "play none none none", // L'animazione si ripete solo una volta
    }
});

// Animazione per il carosello delle testimonianze
gsap.from("#testimonialsCarousel", {
    duration: 1.5,         // Durata di 1.5 secondi
    opacity: 0,            // Il carosello inizia invisibile
    y: 50,                 // Appare scorrendo verso l'alto di 50px
    scrollTrigger: {       // Animazione attivata dallo scroll
        trigger: "#testimonials", // L'animazione si attiva quando la sezione testimonials entra in vista
        start: "top 80%",         // Inizia quando il top della sezione raggiunge l'80% della viewport
        toggleActions: "play none none none", // L'animazione si esegue una sola volta
    }
});

// Animazione per la sezione "Contattaci"
gsap.from("#contact", {
    duration: 1.5,         // Durata di 1.5 secondi
    opacity: 0,            // La sezione inizia invisibile
    y: 50,                 // Scorre verso l'alto di 50px
    scrollTrigger: {       // Animazione attivata dallo scroll
        trigger: "#contact",   // L'animazione si attiva quando la sezione "Contact" entra in vista
        start: "top 80%",      // Inizia quando il top della sezione raggiunge l'80% della viewport
        toggleActions: "play none none none", // Esegue l'animazione solo una volta
        markers: false         // Imposta su true per il debug se necessario
    },
    onComplete: function() {  // Al termine dell'animazione, assicura che l'opacità rimanga a 1
        document.querySelector("#contact").style.opacity = "1";
    }
});

// Animazione per la sezione FAQ
gsap.from("#faq", {
    duration: 1.5,         // Durata di 1.5 secondi
    opacity: 0,            // La sezione FAQ inizia invisibile
    y: 50,                 // Appare scorrendo verso l'alto di 50px
    scrollTrigger: {       // Animazione attivata dallo scroll
        trigger: "#faq",   // L'animazione si attiva quando la sezione FAQ entra in vista
        start: "top 80%",  // Inizia quando il top della sezione raggiunge l'80% della viewport
        toggleActions: "play none none none", // L'animazione si esegue una sola volta
    }
});

// Validazione del modulo di contatto e messaggio di conferma
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impedisce l'invio del form

    // Ottieni i valori dei campi del modulo
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verifica che tutti i campi siano compilati
    if (name && email && message) {
        // Mostra il messaggio di conferma
        document.getElementById('confirmationMessage').classList.remove('d-none');
        // Reset del modulo dopo l'invio
        document.getElementById('contactForm').reset();
    } else {
        alert("Per favore, compila tutti i campi."); // Mostra un alert se i campi non sono completi
    }
});

// Funzione per il pulsante "Back to Top" che appare quando l'utente scorre
window.onscroll = function() {
    // Riferimento al pulsante Back to Top
    var backToTopButton = document.getElementById("backToTop");

    // Mostra il pulsante se l'utente ha scrollato più di 100px, altrimenti lo nasconde
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Mostra il pulsante
    } else {
        backToTopButton.style.display = "none"; // Nasconde il pulsante
    }
};

// Aggiungi un listener al pulsante per gestire il click
document.getElementById("backToTop").addEventListener("click", function(event) {
    event.preventDefault(); // Previene il comportamento predefinito del link

    // Esegue lo scroll fluido verso l'alto
    window.scrollTo({
        top: 0, // Scorre fino alla parte superiore della pagina
        behavior: 'smooth' // Effetto di scorrimento fluido
    });
});


