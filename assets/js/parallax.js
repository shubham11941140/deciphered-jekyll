$(document).ready(function () {
  const $nav = $('.navbar')
  const $body = $('body')
  const $window = $(window)
  const navOffsetTop = $nav.offset().top
  const headerOffsetTop = $('.header').offset().top
  const $document = $(document)

  function init () {
    $window.on('scroll', parallax)
  }

  function parallax () {
    // console.log($('.header').css('background-position'))
    $('.header').css('background-position', function () {
      return (
        ($window.scrollTop() / 9).toString() +
        'px ,' +
        ($window.scrollTop() / 9).toString() +
        'px'
      )
    })
  }

  init()
})
