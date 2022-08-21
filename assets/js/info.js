$(document).ready(function () {
  const $profile = $('.profile')

  const db = {
    'Dr. DhimanSaha': {
      name: 'Dr. Dhiman Saha',
      pos: 'Assistant Professor',
      email: 'dhiman@iitbhilai.ac.in',
      interests: ['Cryptanalysis', 'Fault Attacks', 'Keccak'],
      url: '#'
    },

    Aikata: {
      name: 'Aikata',
      pos: 'Undergraduate',
      email: 'aikata@iitbhilai.ac.in',
      interests: ['Cryptography', 'Blockchain Tech', 'Machine Learning'],
      url: '#'
    },

    AhaanDabholkar: {
      name: 'Ahaan Dabholkar',
      pos: 'Undergraduate',
      email: 'ahaand@iitbhilai.ac.in',
      interests: ['RFID Security', 'Rowhammer Attacks', 'Hyperledger Fabric'],
      url: 'ahaan_profile.html'
    },

    PabitraPal: {
      name: 'Pabitra Pal',
      pos: 'Project Scientist',
      email: 'pabipaltra@gmail.com',
      interests: ['Cryptography', 'Watermarking', 'Data Hiding'],
      url: '#'
    },

    'Bharath V.Gottumukkala': {
      name: 'Bharath V. Gottumukkala',
      pos: 'Undergraduate',
      email: 'gottumukkalab@iitbhilai.ac.in',
      interests: ['Security', 'Automation', 'Internet Of Things'],
      url: '#'
    },

    BanashriKarmakar: {
      name: 'Banashri Karmakar',
      pos: 'Graduate',
      email: 'banashrik@iitbhilai.ac.in',
      interests: [
        'Differential Cryptanalysis',
        'Fault Attacks',
        'MDS Matrix Analysis'
      ],
      url: '#'
    },

    HarshvardhanPatel: {
      name: 'Harshvardhan Patel',
      pos: 'Undergraduate',
      email: 'harshvardhanp@iitbhilai.ac.in',
      interests: [
        'Machine Learning Security',
        'Systems Security',
        'Applied Cryptography'
      ],
      url: '#'
    },

    Aikata: {
      name: 'Aikata',
      pos: 'Undergraduate',
      email: 'aikata@iitbhilai.ac.in',
      interests: ['Cryptography', 'Blockchain Tech', 'Machine Learning'],
      url: '#'
    }
  }

  function setInfo (dict) {
    const name = dict.name
    const pos = dict.pos
    const email = dict.email
    const interests = dict.interests
    const url = dict.url
    const $dock = $('.info')

    $dock.find('.name')[0].innerText = name
    $dock.find('.email')[0].innerText = email
    $dock.find('.pos')[0].innerText = pos
    $dock.find('.areasofinterest')[0].innerText = 'Areas Of Interest'
    $dock
      .find('.interest-list')
      .html(
        '<li>' +
          interests[0] +
          '</li><li>' +
          interests[1] +
          '</li><li>' +
          interests[2] +
          '</li>'
      )
    $dock.find('.button')[0].innerText = 'More...'
    $dock.find('.button').attr('href', url)
  }

  function profileClick () {
    $('.info').hide()
    const k = $(this).find('h3').text().trim()
    // console.log(k)
    setInfo(db[k])
    $('.info').fadeIn(200)
  }

  function init () {
    $profile.on('click', profileClick)
  }

  init()
})
