/* Custom script because it is prohibited to call JS on main page */
/* 
!! OPMERKING AAN DOCENT !!
Dit is niet het enige Javascript wat we hebben,
want we hebben ze opgesplitst in meerdere bestandjes
omdat dit gemakkelijker werkt. Neem vooral een kijkje
in de andere Javascript bestanden :)
 */
/* ========== Calling the Lightboxes ==========*/
$('.image1').simpleLightbox() + $('.gallery a').simpleLightbox();

/* ========= Configuring the Carousel =========*/
$('.carousel').carousel({
            pause: "false"
            });

/* =========== Calling the Popover ============*/
$('#popoverCC').popover();