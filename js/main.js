$(document).ready(function() {
    $('#aboutvideo-youtube').tubeplayer({
        width: 853, // the width of the player
        height: 480, // the height of the player
        allowFullScreen: "true", // true by default, allow user to go full screen
        initialVideo: "A3PDXmYoF5U", // the video that is loaded into the player
        preferredQuality: "hd720", // preferred quality: default, small, medium, large, hd720
        start: 63,
        modestbranding: false,
        showControls: false,
        theme: "dark",
        autoHide: true,
        showRelated: false
    });

    $(document).on('impress:stepenter', function(e) {
        var currentSlide = $(e.target).attr('id');
        if (currentSlide === 'aboutvideo') {
            $('#aboutvideo-youtube').tubeplayer("play");

        } else if (currentSlide === 'slide3') {
            window.location = 'http://www.google.com/';
        }
    });
    $(document).on('impress:stepleave', function(e) {
        var currentSlide = $(e.target).attr('id');

        if (currentSlide === 'aboutvideo') {
            $('#aboutvideo-youtube').tubeplayer("stop");
        }
    });
});
