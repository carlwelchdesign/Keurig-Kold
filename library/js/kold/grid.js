/* jshint quotmark: false */
KEURIG.extend( 'functions' );
KEURIG.functions.changeView = function() {
    $('.grid-view-btns button').click(function(){
        var activeClass = $( this ).attr( 'data-view' );
        $('.grid-view-btns button').removeClass('active');
        $( this ).addClass('active');
        $('.grid-area > div').removeClass().addClass( activeClass );
    });
};
KEURIG.functions.selectFilter = function() {
    $('.accordion-navigation li').click(function( evt ){
        evt.preventDefault();
        evt.stopPropagation();
        $( this ).toggleClass('filter-selected');
    });
};
$(document).ready(function(){
    KEURIG.functions.changeView();
    KEURIG.functions.selectFilter();
    //KEURIG.functions.switchSearch();
});
$(document).foundation({
    accordion: {
        // allow multiple accordion panels to be active at the same time
        multi_expand: true
    }
});