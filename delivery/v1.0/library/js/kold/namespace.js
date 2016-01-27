// Global Namespace for KEURIG KOLD
var KEURIG = KEURIG || {}; // jshint ignore:line

/*
* Convenience function for parsing string namespaces and automatically generating nested namespaces.
* http://addyosmani.com/blog/essential-js-namespacing/
* http://yuilibrary.com/yui/docs/api/classes/YUI.html#method_namespace
*
* Example:
*    KEURIG.extend( 'some.type.of.object' );
*
* @param ns {String} A dot separated namespace
*
*/
KEURIG.extend = function( ns ) {

    var parts = ns.split( '.' )
        , parent = this
        ;

    if ( parts[ 0 ] === 'KEURIG' ) {
        parts = parts.slice( 1 );
    }

    for ( var i = 0, len = parts.length; i < len; i++ ) {

        // Create a property if it doesn't exist
        if ( typeof parent[ parts[ i ] ] === 'undefined' ) {

            parent[ parts[ i ] ] = {};
        }

        parent = parent[ parts[ i ] ];
    }

    return parent;
};