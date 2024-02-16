document.addEventListener('DOMContentLoaded', function () {
    var scroller = scrollama();

    function handleStepEnter(response) {
        // Trouver l'image dans le même conteneur 'content' ou 'additional-content' que le step activé
        var stepElement = response.element;
        console.log(stepElement);
        var container = stepElement.closest('.content, .additional-content');
        var img = container.querySelector('.image-container img');
        var stepData = $stepElement.attr('data-step');
        if (img) {
            img.src = stepData
        }
    }

    function init() {
        scroller.setup({
            step: '.step',
            offset: 0.5,
            debug: false
        }).onStepEnter(handleStepEnter);
    }

    init();
});
