---
title: Home
js:
  [
    "/assets/js/typewriter.js",
    "/assets/js/parallax.js",
    "/assets/js/twitter-handler.js",
  ]
css: ["/assets/css/style_home.css"]
layout: default
order: 1
---

{% include navbar.html %}

<section class="header">
<div class="row">
    <div class="five columns">
        <h1>de.ci.phe.red<div class="name-small">LAB</div></h1>
        <br>
        <h3 class="heading">plaintext  or <span class="typewriter" >'%#*@(*$)'</span></h3>
    </div>
    <div class="motivation seven columns">
        <h3 class="heading">What We Do</h3>
        <p>
        “We are the explorers of the infinity” - Tinkering our way through myriad problems of security that the digital world would anticipate. 
        </p>
    </div>
</div>            
</section>
<!-- {% include navbar.html %} -->
<div class="row">
    <div class="spacer-small"></div>
</div>
<div class="row">
    <h1>Welcome to The Lab</h1>
    <div class="row">
        <div class="three columns">
            <img width="100%" src="/assets/images/logo.jpg">
        </div>
        <div class="nine columns">
        <b>de.ci.phe.red LAB</b> is a group of researchers focussed on pushing the frontiers of cybersecurity. Our members are affiliated to IIT Bhilai in the capacity of students and faculty. Established in 2019, under the guidance and mentorship of Dr Dhiman Saha, the members of de.ci.phe.red LAB published their first academic paper in Cryptanalysis between late 2019 to early 2020. Currently, de.ci.phe.red LAB is working on topics in Core Cryptography, RFID Security, Embedded Device Security. We are actively looking for new topics in cybersecurity to work on and are hence open to having research collaborations with other academic institutes on topics from cybersecurity including but not limited to the above.
        </div>
    </div>
    
</div>
<div class="spacer-small"></div>
<div class="news row">
    <h3 class="heading">News From The Lab</h3>
    <!-- <div class="half columns">&nbsp;</div> -->
    <div class="intro eight columns">
            {% include news.html %}
            <div class="row">
                <div class="spacer-small"></div>
            </div>
    </div>
    <!-- <div class="one columns">&nbsp;</div>  -->
    <div class="four columns">
        <div style="float:right;">
            <a class="twitter-timeline" data-lang="en" data-width="22em" data-height="50em" data-theme="dark" href="https://twitter.com/decipheredLabs?ref_src=twsrc%5Etfw">Tweets by decipheredLabs</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
        <!-- <img style="float:left;max-width: 100%;" src="https://imgs.xkcd.com/comics/password_strength.png"> -->
    </div>
</div>

<div class="row">
    <h3 class="heading">Ongoing Research</h3>
    <div class="six columns">
        <p>
            Ongoing Research at our lab is focused towards all things security. If you are into security research, we are interested !!!
            Having said that, in broad terms we have the following projects going on at IIT Bhilai right now
            <ul>
                <li>Lightweight Cryptography</li>
                <li>Theoretical and Fault Based Cryptanalaysis</li>
                <li>Lightweight Authentication Over RFID</li>
                <li>Secure Boot in Embedded Devices</li>
            </ul>
        </p>        
    </div>
    <div style="margin-left: 0" class="six columns">
        <figure>
            <img style="float: right; max-width: 100%;" src="https://imgs.xkcd.com/comics/security.png">
            <!-- <figcaption class=""><a href="xkcd.com">Image Taken From the xkcd Comics: Security</a></figcaption> -->
        </figure>
    </div>
</div>

<div class="row">
    <div class="spacer-small"></div>
</div>

<div class="row">
    <h3 class="heading">Affiliations</h3>
    <img class="logo" src="/assets/images/iitbh.png">
</div>
