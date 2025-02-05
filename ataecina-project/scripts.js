document.addEventListener("DOMContentLoaded", function () {
    console.log("Página completamente cargada");
    initializeLanguageToggle();

    // Ejecutar toggleLanguage al cargar la página con el idioma predeterminado (español en este caso)
    toggleLanguage("es"); // Cambia "es" por "en" si quieres que el idioma predeterminado sea inglés
});

function initializeLanguageToggle() {
    const currentLanguageFlag = document.getElementById("currentLanguageFlag");

    console.log("Inicializando cambio de idioma");

    // Usamos la delegación de eventos en el contenedor #languageDropdown
    document.getElementById("languageDropdown").parentElement.addEventListener("click", function (event) {
        if (event.target && event.target.matches(".dropdown-item")) {
            event.preventDefault();
            const selectedLanguage = event.target.getAttribute("data-lang");
            console.log("Idioma seleccionado:", selectedLanguage);

            // Cambia la bandera del botón según el idioma seleccionado
            currentLanguageFlag.textContent = selectedLanguage === "es" ? "🇪🇸" : "🇺🇸";

            // Llama a toggleLanguage para cambiar el contenido
            toggleLanguage(selectedLanguage);
        }
    });
}

// Palabras clave que queremos resaltar
const keywords = ["Ataecina", "Project", "Proyecto", "SIEM", "EDR", "WAF", "Firewalls", "SOC", "tools", "tool", "herramientas", "herramienta"];

function toggleLanguage(language) {
    console.log("Ejecutando toggleLanguage con idioma:", language);

    // Selecciona todos los elementos con atributos data-lang-es y data-lang-en
    document.querySelectorAll("[data-lang-es]").forEach(el => {
        const newText = el.getAttribute(`data-lang-${language}`);
        if (newText) {
            // Limpiar el contenido del elemento para reconstruirlo
            el.innerHTML = ""; // Limpia el contenido del elemento

            // Llama a la función para construir el contenido con resaltado seguro
            createHighlightedText(el, newText, keywords);
        } else {
            console.error(`No se encontró el atributo para ${language} en el elemento:`, el);
        }
    });
}

// Función para construir el contenido con palabras clave resaltadas de forma segura
function createHighlightedText(element, text, keywords) {
    // Divide el texto en palabras
    const words = text.split(" ");
    words.forEach((word, index) => {
        const cleanedWord = word.replace(/[.,]/g, ""); // Limpia la puntuación para coincidencia exacta

        if (keywords.includes(cleanedWord)) {
            // Crea un <span> para palabras clave
            const span = document.createElement("span");
            span.classList.add("highlight");
            span.textContent = word;
            element.appendChild(span);
        } else {
            // Crea un nodo de texto para palabras normales
            const textNode = document.createTextNode(word);
            element.appendChild(textNode);
        }

        // Agrega un espacio entre palabras, excepto la última
        if (index < words.length - 1) {
            element.appendChild(document.createTextNode(" "));
        }
    });
}

    // Inicializar el carrusel con opciones
    const benefitsCarousel = new bootstrap.Carousel('#benefitsCarousel', {
        interval: 3000, // Cambia automáticamente cada 3 segundos
        ride: 'carousel' // Inicia automáticamente el carrusel
    });

