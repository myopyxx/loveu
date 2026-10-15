(function () {
    "use strict";

    var container = document.getElementById("floating-emojis");

    if (!container) {
        return;
    }

    var emojis = ["❤️", "💖", "💝", "💗", "💓", "🧸", "🐻"];

    emojis.forEach(function (emoji) {
        var element = document.createElement("span");

        element.className = "floating-emoji";
        element.textContent = emoji;

        // Случайное положение по ширине экрана.
        // Оставляем место справа, чтобы эмодзи не обрезались.
        element.style.left =
            "calc(" + (Math.random() * 100) + "% - 40px)";

        // Случайная длительность полного прохода: от 10 до 30 секунд.
        var duration = 10 + Math.random() * 20;
        element.style.animationDuration = duration + "s";

        // Отрицательная задержка распределяет эмодзи по экрану
        // сразу после открытия страницы.
        element.style.animationDelay =
            -(Math.random() * duration) + "s";

        container.appendChild(element);
    });
})();
