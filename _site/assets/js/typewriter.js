$(document).ready(function () {
  txtarray = [
    '78hdns^&((',
    '%#*@(*$)^%',
    '&@*(#^☚!90',
    '*@!(mç$^&^#',
    '(*^&*@EHF&'
  ]
  delay = 50
  cur = txtarray[0]
  flag = 0
  i = 0

  String.prototype.rpad = function (padString, length) {
    let str = this
    while (str.length < length) str = str + padString
    return str
  }

  $typewriter = $('.typewriter')

  function tick () {
    if (i == cur.length) {
      flag = 1
      delay /= 4
    }
    if (i == 0) {
      flag = 0
      delay *= 4
      cur = txtarray[(txtarray.indexOf(cur) + 1) % txtarray.length]
    }
    $typewriter.text(cur.slice(0, flag == 0 ? i++ : i--).rpad('*', 10))
    setTimeout(tick, delay)
  }

  tick()
})
