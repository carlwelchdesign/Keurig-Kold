# JavaScript Style Guide #



## Miscellaneous ##


Make use of built in Foundation 5 JS as much as possible http://foundation.zurb.com/docs/.

Add script blocks at the bottom of the page right above closing body tag to call a specific module.

Use soft tabs with 4 spaces.

Use `===` and `!==` instead of `==` and `!=` for comparison expressions.


## Naming Conventions ##

### Identifiers Start With a Lowercase Letter and use camelcase for Multiple Words ###

*No*

    var _myVar = 'foo';
    var my_var = 'foo';
    var MYVAR = 'foo';
    var $myvar = 'foo';

***Yes***

    var myVar = 'foo';



### Constructors Start With an Uppercase Letter and use camelcase for Multiple Words ###

*No*

    function foo() {};
    
    foo.prototype = {};
    
    new foo;

***Yes***

    function Foo() {};
    
    Foo.prototype = {};
    
    new Foo;



## Structure

### Use Single Quotes ###

*No*

    var foo = "bar";

***Yes***

    var foo = 'bar';



### Place Opening Brackets on Same Line as Preceding Statement ###

*No*

    function foo()
    {
    
    }

***Yes***

    function foo() {
    
    }



### Declare all Variables at the top of Their Scope ###

*No*

    function sample() {
      
        if ( condition ) {
          
            var foo = 'bar';
        }
        
        return foo;
    }

***Yes***

    function sample() {
        
        var foo;
        
        if ( condition ) {
        
            foo = 'bar';
        }
        
        return foo;
    }



### Declare all Variables With one var Keyword when Appropriate and use Preceding Commas ###

*No*

    var foo;
    var bar;
    var lorem;
    var ipsum;

*No*

    var foo, bar, lorem, ipsum;

*No*

    var foo,
        bar,
        lorem,
        ipsum;

***Yes***

    var foo
        , bar
        , lorem
        , ipsum
        ;



### Use Whitespace ###

*No*

    function sample(arg,bar){
        var tmp
            ,foo=arg && bar?true:false;
        
        if(foo){tmp=foo;}
        
        if(bar){
            tmp = bar;
        }else if ( baz ) {
            tmp = baz;
        }else{
            tmp = bat;
        }
        return tmp+1-4*6;
    }

***Yes***

    function sample( arg, bar ) {
        
        var tmp
            , foo = arg && bar ? true : false
            ;
        
        if ( foo ) {
        
            tmp = foo;
        }
        
        if ( bar ) {
        
            tmp = bar;
        
        }
        else if ( baz ) {
        
            tmp = baz;
        
        }
        else {
        
            tmp = bat;
        }
        
        return tmp + 1 - 4 * 6;
    }



### Use a Bang Operator Instead of Wrapping Parenthesis for Immediately Invoked Functions ###

*No*

    (function() {})();

***Yes***

    !function() {}();


### Favor Object Literal Notation for Grouping Object Members ###

*No*

    var foo = {};
    
    foo.prop = 'bar';
    
    foo.method = function() {};

***Yes***

    var foo = {
      
        prop: 'bar',
        
        method: function() {}
    }


### Program settings

#### Sublime Text

1. Make sure a JavaScript file is your currently viewed file type.

2. Select Preferences > Settings - More > Syntax Specific - User

3. Enter the following code:

        {
            "tab_size": 4,
            "translate_tabs_to_spaces": true,
            "detect_indentation": true,
            "indent_to_bracket": true
        }