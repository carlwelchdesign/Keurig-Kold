# CSS Style Guide #



## Miscellaneous ##

Place all new CSS files in the appropriate breakpoint.

Use soft tabs with 4 spaces. 

Do not use the `!important` declaration unless no reasonable alternative exists.

Do not use the universal selector (`*`) unless no reasonable alternative exists.

Do not next rules more than three levels deep.

Make use of Foundation 5 built in styles as much as possible http://foundation.zurb.com/docs/

## Structure ##

### Use conditional comments to add support for IE8  ###

Make sure you encase all the css links into conditional comments to accommodate for IE8. No *index-full.css* should show up in Chrome.

*No*

    <link rel="stylesheet" href="../library/css/kold_lp/index-full.css" type="text/css"> 

***Yes***

    <!--[if (gt IE 8) | (IEMobile)]><!-->
    <link rel="stylesheet" href="../library/css/beta_testers/index.css" type="text/css">      
    <!--<![endif]--><!--[if (lt IE 9) & (!IEMobile)]>
    <link rel="stylesheet" href="../library/css/beta_testers/index-full.css" type="text/css"> 
    <![endif]-->

### Do not include the CSS twice ###

The following css is already included in the global css, so there’s no need to add it again on the page:

- Buttons */library/scss/global/buttons/index.css*
- Nav */library/scss/global/nav/index.css*
- Footer */library/scss/global/footer/index.css*
- Typography */library/scss/global/typography/index.css*
- Radio and checkboxes */library/scss/global/radio_checkboxes/index.css*
- Modules */library/scss/global/modules/index.css*

### Mobile ###

If you need to support mobile, please use the following structure in index.scss

    // Configuration
    @import '../../config/index.scss';

    // Dependencies
    @media screen and (max-width:744px) {
        @import 'default.scss'
    }
    @media screen and (min-width:745px) {
        @import '745-1023.scss'
    }
    @media screen and (min-width:1024px) {
        @import '1024-1199.scss'
    }
    @media screen and (min-width:1200px) {
        @import '1200.scss'
    }
    
Do not include default.scss in index-full.scss. We do not support IE8 on mobile devices.

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