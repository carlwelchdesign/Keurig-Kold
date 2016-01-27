var scrollMagic = {
    scene1:680,
    scene2:4552,
    top:0,
    isMouseDown: false,
    isSnapping: false,
    offset: 50,
    scrollOffset:0,
    scrollInterval:0,
    directionThreshold: 50
    // ,
    // $snapContainer: $('#container')
};

$(function () {
    //var ease = Power1.easeOut;
    addLinkListener();
    var t = 0.5;
    var controller = new ScrollMagic.Controller();
    var t1 = new TimelineMax();

    t1.to('.coke-red', t, {opacity: 0, delay: 1, ease: Power1.easeOut})
    .add([
        TweenMax.to('.coca-cola', t, {opacity: 0, delay:0.5,  ease: Power1.easeOut}),
        TweenMax.to('.hideme', t, {opacity: 1,  delay:0.5, ease: Power1.easeOut})
    ])
    .add([
        TweenMax.to('.frame-three', t, {marginTop: -500, delay:0.5})
        ,TweenMax.to('#slide-show', t, {height: 500, delay:0.5})
    ])
    .to('.gallery', t, {height: 500, ease: Power1.easeOut, delay:0.5});

    // Create the Scene and trigger when visible with ScrollMagic

    new ScrollMagic.Scene({
        triggerElement: '#scene',
        triggerHook: 0,
        duration: 5000,
        reverse: true,
        offset: -1
    })
    .setPin('#scene')
    .setTween(t1)
    .addTo(controller);

    function addLinkListener(){
        //  bind scroll to anchor links
        $(document).on('click', 'a[href^=#]', function (e) {
            scroll2scene2();
            e.preventDefault();
        });
    }

    $( '#bethefirst' ).delay(1500).animate({
        opacity:0
    }, 1500,'swing', function(){
        $('#hero-one-cta').animate({
            opacity:1
        }, 1000,'swing', function(){
            $('.down-button').animate({
                marginTop:462
            }, 500,'swing');
        });
    });


    $('.down-button').on('click', function(){
        scrollToAnchor();
    });

    function scrollToAnchor(){
        var aTag = $('.frame-two');
        $('html,body').animate({
            scrollTop: aTag.offset().top
        },1000,'swing');
    }

    /******************
    Scoll Event Listeners
    *******************/
    var scrollStop = 0;
    var speedPercent = 0;
    $(window)
    .on('scrollstop', function(e,f) {

        if(scrollMagic.isMouseDown) {
            return;
        }
        var curPos = controller.scrollPos();
        var dir = (curPos > scrollStop ? 'down' : 'up');
        if(dir==='down'){
            if(curPos < scrollMagic.scene1 && curPos > scrollMagic.offset){
                speedPercent = (scrollMagic.scene1 - curPos ) / scrollMagic.scene1;
                scroll2scene2(speedPercent);
            }
            if(curPos < scrollMagic.scene2 && (curPos > scrollMagic.scene1 + scrollMagic.offset) && dir==='down'){
                speedPercent = (scrollMagic.scene2 - curPos ) / scrollMagic.scene2;
                scroll2scene3(speedPercent);
            }
        }else if(dir==='up'){
            if(curPos<scrollMagic.scene1 && curPos > scrollMagic.offset){
                speedPercent = Math.abs(curPos / scrollMagic.scene1) * 0.7;
                scroll2top(speedPercent);
            }
            if(curPos<scrollMagic.scene2 && (curPos>scrollMagic.scene1 + scrollMagic.offset)){
                speedPercent = Math.abs((scrollMagic.scene1 - curPos ) / scrollMagic.scene2);
                scroll2scene2(speedPercent);
            }
        }
        scrollStop = curPos;
    })
    .on( 'mousedown', function(e) {
        scrollMagic.isMouseDown = true;
    })
    .on( 'mouseup', function(e) {

        scrollMagic.isMouseDown = false;

        $(window).trigger('scrollstop');
    });

    var scroll2top = function(speedPercent){
        speedPercent = (speedPercent || 1);
        var s = 5 * speedPercent;
        /*jshint -W020 */
        scrollTween = TweenMax.to(window, s, {scrollTo: {y: scrollMagic.top, ease: Power1.easeOut}}); 
    };
    var scroll2scene2 = function(speedPercent){
        speedPercent = (speedPercent || 1);
        var s = 5 * speedPercent;
        /*jshint -W020 */
        scrollTween = TweenMax.to(window, s, {scrollTo: {y: scrollMagic.scene1, ease: Power1.easeOut}}); 
    };

    var scroll2scene3 = function(speedPercent){
        speedPercent = (speedPercent || 1);
        var s = 4 * speedPercent;
        /*jshint -W020 */
        scrollTween = TweenMax.to(window, s, {scrollTo: {y: scrollMagic.scene2, ease: Power1.easeOut}}); 
    };
});