$(document).ready(function () {
  function set_height () {
    height = $('.intro').eq(0).outerHeight()
    console.log(height)
    $('.twitter-timeline').attr('data-height', height)
    console.log($('.twitter-timeline').attr('data-height'))
  }

  $(window).on('resize', set_height)

  set_height()
})
