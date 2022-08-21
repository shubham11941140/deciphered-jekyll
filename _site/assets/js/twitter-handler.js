$(document).ready(function () {
  function set_height () {
    height = $('.intro').eq(0).outerHeight()

    $('.twitter-timeline').attr('data-height', height)
  }

  $(window).on('resize', set_height)

  set_height()
})
