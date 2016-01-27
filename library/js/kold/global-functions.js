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
KEURIG.functions.searchSuggestions = function() {
    var self = this
        , body = $( 'body' )
        ;
    self.dropdown = $('#contentSearchDrop');
    self.toggleClickOutside = false;
    
    $('.search-box').bind('input', function( evt ){
        
        var searchTerm = $('#searchInput').val();
        
        if( searchTerm !== '' ) {
            self.dropdown.show();
            self.toggleClickOutside = true;
        } else {
            self.dropdown.hide();
            self.toggleClickOutside = false;
        }
        
        body.on( 'click', $.proxy( self.close, self ) );
        body.on( 'touchstart', $.proxy( self.close, self ) );
    });
    
    $( '.search-suggestions a').bind( 'click', function( evt ) {
        evt.preventDefault();
        var selectedTerm = $( this ).text();
        $('#searchInput').val( selectedTerm );
        self.dropdown.hide();
        self.toggleClickOutside = false;
    });
    
    self.close = function( evt ) {
        
        self.isSame = $( evt.target ).parents().hasClass( 'nav-search' ) ? true : false;

        if ( self.isSame ) {
            
            return;
            
        } else if( self.toggleClickOutside ) {
            self.dropdown.hide();
            self.toggleClickOutside = false;
        }
    };
};
KEURIG.functions.updateSelectorFlag = function() {
    $('#country-select').change(function(){
        $(this).parent().removeClass().addClass(this.value.toLowerCase() + '-flag');
    });
};
KEURIG.functions.updateQty = function() {
    var qty = $('#qtyProd').val()
        , maxValue = $('#qtyProd').attr( 'data-max' )
        ;
    $('.decrease').click(function(){
        if( qty < 1 ) {
            return;
        }
        qty--;
        $('#qtyProd').val(qty);
    });
    $('.increase').click(function(){
        if( qty >= maxValue ) {
            return;
        }
        qty++;
        $('#qtyProd').val(qty);
    });
};

$(document).ready(function(){
    KEURIG.functions.updateSelectorFlag();
    KEURIG.functions.updateQty();
    KEURIG.functions.searchSuggestions();
    //KEURIG.functions.switchSearch();
});