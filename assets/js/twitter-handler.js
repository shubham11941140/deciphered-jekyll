$(document).ready(function(){

    function set_height(){
        height = $('.intro.seven.columns').eq(0).outerHeight();
        $('.twitter-feed').height(height);
        

    }

    $(window).on('resize', set_height);

    set_height();
    

})