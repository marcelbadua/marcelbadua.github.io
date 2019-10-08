jQuery.noConflict();
(function( $ ) {

$('*[data-toggle="activate"]').on('click', function(event) {
    event.preventDefault();
    var target = $(this).data('target');
    $(this).toggleClass('is-active');
    $(target).toggleClass('is-active');
});

})(jQuery);