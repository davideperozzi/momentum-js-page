jQuery(document).ready(function($){
    /**
     * Navigation
     */

    $(window).on('scroll', function(){
        var scrollY = $(document).scrollTop();
        var element = $('nav');

        if (scrollY > 50) {
            element.addClass('scrolled');
        } else {
            element.removeClass('scrolled');
        }
    });

    $('[data-nav]').each(function(i, el){
        var linkEl = $(el);

        linkEl.on('click', function(){
            $("html, body").animate({
                scrollTop: $(linkEl.data('nav')).offset().top
            }, 1000);
        });
    });

    /**
     * Draggable
     */

    function createDraggable(element, config) {
        if (typeof element == 'string') {
            element = $(element)[0];
        }

        return new momentum.Draggable(element, config);
    }

    /**
     * Intro draggable
     */

    var headlineElement = $('.intro-draggable');
    var headlineParentElement = headlineElement.closest('section');

    createDraggable(headlineElement[0], {
        elementBounds: headlineParentElement[0],
        friction: 0.1,
        restitution: 0.25,
        onTranslate: function() {
            if ( ! headlineParentElement.hasClass('moved')) {
                headlineParentElement.addClass('moved');
            }
        }
    });
});