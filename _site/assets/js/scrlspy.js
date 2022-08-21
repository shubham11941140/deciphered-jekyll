$(document).ready(function () {
  const $window = $(window)
  let viewPHeight = $window.height()
  const wiggleroom = viewPHeight / 2
  let contentPosList = []
  let prev_view = get_view()
  indexList = $('.index-item')

  $('.content').each(function () {
    // console.log($(this).offset().top);
    contentPosList.push($(this).offset().top)
  })
  contentPosList = contentPosList.reverse()

  function init () {
    $window.on('scroll', scrlspy)
    $window.on('resize', resize)
  }

  function resize () {
    viewPHeight = $window.height()
  }

  function scrslpy_debug () {
    console.log('scroll', $window.scrollTop())
    console.log(
      contentPosList.findIndex((element) => {
        const x = $window.scrollTop() + wiggleroom - element
        console.log('x', x)
        return x > 0
      })
    )
    console.log('-----------')
  }

  function get_view () {
    return contentPosList.findIndex((element) => {
      return $window.scrollTop() + wiggleroom - element > 0
    })
  }

  function scrlspy () {
    const view = get_view()

    if (
      !indexList.eq(contentPosList.length - view - 1).hasClass('active-index')
    ) {
      indexList
        .eq(contentPosList.length - prev_view - 1)
        .removeClass('active-index')
      indexList.eq(contentPosList.length - view - 1).addClass('active-index')
    }
    prev_view = view
  }

  init()
})
