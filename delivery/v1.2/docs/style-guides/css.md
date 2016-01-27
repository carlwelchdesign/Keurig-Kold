# CSS Style Guide #



## Miscellaneous ##

Place all new CSS files in the appropriate breakpoint.

Use soft tabs with 4 spaces. 

Do not use the `!important` declaration unless no reasonable alternative exists.

Do not use the universal selector (`*`) unless no reasonable alternative exists.

Do not next rules more than three levels deep.

Make use of Foundation 5 built in styles as much as possible http://foundation.zurb.com/docs/



## Syntax ##

### Use Single Quotes ###

*No*

    font-family:"Helvetica Neue";

***Yes***

    font-family:'Helvetica Neue';



### Quote URL Strings ###

*No*

    background:url(../../images/some/image.jpeg);

***Yes***

    background:url('../../images/some/image.jpeg');



### Always use Lowercase and Split Multiple Words With Dashes ###

*No*

    .MYCLASS {
        width:100%;
    }
    .Myclass {
        width:100%;
    }
    .myClass {
        width:100%;
    }
    .my_class {
        width:100%;
    }
    .myclass {
        width:100%;
    }

***Yes***

    .my-class {
        width:100%;
    }



### Place Comma-Separated Selectors on Newline ###

*No*

    p, a, div, span {
        width:100%;
    }
    
***Yes***

    p,
    a,
    div,
    span {
        width:100%;
    }



### Separate Properties on Their own Line ###

*No*

    p { width:100%; height:100%; }
    
***Yes***

    p {
        width:100%;
        height:100%;
    }



### Separate Major Sections With the Following Multi-Line Comment Banner ###

    /*==============================================================================
     
        Major Section Name - Description of major section
    
    ==============================================================================*/



### Separate Minor Sections With the Following Multi-Line Comment Header ###

    /*
    Minor Section Name
    ---------------------------*/



### Separate sub-Sections With the Following Single-Line Comment Header ###

    /* Sub-Section Name */



### Remove Empty Lines Between Rules ###

*No*

    a {
        width:100%;
    }
    
    p {
        height:100%;
    }
    
***Yes***

    a {
        width:100%;
    }
    p {
        height:100%;
    }



### Keep Selector Specificity as Minimal as Possible ###

*No*

    .parent .wrapper .container span .item {
        width:100%;
    }

***Yes***

    .parent .item {
        width:100%;
    }



### Do not use the `tagname.MMM--class` Structure Unless Necessary ###

*No*

    a.link {
        width:100%;
    }
    
***Yes***

    .link {
        width:100%;
    }
    
### Do not use id's for styling ###

*No*

    #item {
        width:100%;
    }
    
***Yes***

    .item {
        width:100%;
    }