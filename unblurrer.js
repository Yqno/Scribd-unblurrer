(function() {
    'use strict';

    setInterval(function(){

        // Wählen Sie alle Elemente mit der Klasse "auto__doc_page_webpack_doc_page_blur_promo" aus und entfernen Sie sie.
        var autoPromoElements = document.getElementsByClassName("auto__doc_page_webpack_doc_page_blur_promo");
        while(autoPromoElements.length > 0){
            autoPromoElements[0].parentNode.removeChild(autoPromoElements[0]);
        }

        // Wählen Sie alle Elemente mit der Klasse "promo" aus und entfernen Sie sie.
        var promoElements = document.getElementsByClassName("promo");
        while(promoElements.length > 0){
            promoElements[0].parentNode.removeChild(promoElements[0]);
        }
        
        // Ändern Sie die Schriftfarbe aller Elemente mit der Klasse "a" auf schwarz.
        var aElements = document.getElementsByClassName('a');
        for (var i = 0; i < aElements.length; i++) {
            aElements[i].style.color = 'black';
        }
        
        // Ändern Sie die Schriftfarbe aller Elemente mit der Klasse "l" auf schwarz.
        var lElements = document.getElementsByClassName('l');
        for (i = 0; i < lElements.length; i++) {
            lElements[i].style.color = 'black';
        }
        
        // Ändern Sie die Opazität aller Elemente mit der Klasse "absimg" auf 1.
        var absimgElements = document.getElementsByClassName('absimg');
        for (i = 0; i < absimgElements.length; i++) {
            absimgElements[i].style.opacity = 1;
        }
        
        // Entfernen Sie alle Textschatten von Elementen mit der Klasse "text_layer".
        var textLayerElements = document.getElementsByClassName('text_layer');
        for (let item of textLayerElements) {
            item.style.textShadow = '';
        }
        
    }, 1500);

})();
