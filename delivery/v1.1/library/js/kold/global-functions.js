/* jshint quotmark: false */
KEURIG.extend( 'functions' );
KEURIG.functions.switchSearch = function() {
    $('#searchInput').bind('input', function(){
        var searchTerm = $('#searchInput').val();
        if( searchTerm !== '' ) {
            $('.featured-search').hide();
            $('.autofill-search').show();
        } else {
            $('.autofill-search').hide();
            $('.featured-search').show();
        }
    });
};
KEURIG.functions.updateSelectorFlag = function() {
    $('#country-select').change(function(){
        $(this).parent().removeClass().addClass(this.value.toLowerCase() + '-flag');
    });
};
KEURIG.functions.updateQty = function() {
    var qty = $('#qtyDrinkmaker').val()
        , maxValue = $('#qtyDrinkmaker').attr( 'data-max' )
        ;
    $('.decrease').click(function(){
        if( qty < 1 ) {
            return;
        }
        qty--;
        $('#qtyDrinkmaker').val(qty);
    });
    $('.increase').click(function(){
        if( qty >= maxValue ) {
            return;
        }
        qty++;
        $('#qtyDrinkmaker').val(qty);
    });
};

$(document).ready(function(){
    KEURIG.functions.updateSelectorFlag();
    KEURIG.functions.updateQty();
    KEURIG.functions.switchSearch();
});