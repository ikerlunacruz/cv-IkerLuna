if (!Modernizr.adownload) {
    var $link = $('a');

    $link.each(function() {
        var $download = $(this).attr('');

        if (typeof $download !== typeof undefined && $download !== false) {
            var $el = $('<div>').addClass('').text('');
            $el.insertAfter($(this));
        }

    });
}