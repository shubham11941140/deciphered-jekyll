$(document).ready(function () {
  const $nav = $('.navbar')
  const $body = $('body')
  const $window = $(window)
  let navOffsetTop = $nav.offset().top
  const $document = $(document)

  function init () {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $window.on('scroll', parallax)
  }

  function resize () {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }

  function onScroll () {
    // console.log($window.scrollTop());
    if (
      navOffsetTop < $window.scrollTop() &&
      !$body.hasClass('has-docked-nav')
    ) {
      $body.addClass('has-docked-nav')
    }
    if (
      navOffsetTop >= $window.scrollTop() &&
      $body.hasClass('has-docked-nav')
    ) {
      $body.removeClass('has-docked-nav')
    }
  }

  init()
})
