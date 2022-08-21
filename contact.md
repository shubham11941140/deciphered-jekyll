---
title: Contact
order: 6
layout: default
css: [/assets/css/style_home.css]
---

{% include navbar.html %}

<div class="spacer-small"></div>
<div class="row">
    <div class="eight columns">
        <h3 class="heading">News</h3>
        These is a history of all the news updates from de.ci.phe.red LAB.
        <div class="spacer-small"></div> 
        <div class="row">
            {% for news in site.categories.news %}
                <div class="news-item row">
                    <h3 class="heading no-border">{{news.date | date: '%B %d, %Y'}}</h3>
                    <div class="row">
                        {{news.content}}
                    </div>
                </div>
            {% endfor %}
        </div>  
    </div>
    <div class="four columns">
        <h3 class="heading">Contact</h3>
        <div class="row">
            <h3 class="heading small no-border">Mailing Address</h3>
            <p class="small"> Room 206,<br>
                Indian Institute Of Technology (IIT), Bhilai<br>
                GEC Campus, Sejbahar,<br>
                Raipur, Chhattisgarh<br>
                India - 492015<br>
                <b>Phone - </b>0771-2973618<br>    
                <b>Email - </b><a href="mailto:get@de.ci.phe.red">get@de.ci.phe.red</a></p>    
        </div>
        <div class="spacer-small"></div>
        <div class="row">
            <h3 class="heading">Acknowledgement</h3>
            <p>
                This website is built using a Jekyll Template developed by the lab. The template is based on the minimal <a href="http://getskeleton.com/"><code>skeleton css</code></a>boilerplate. The website also uses <a href="https://buttons.github.io/"><code>GitHub:Buttons</code></a> to generate all GitHub links. <i>Documentation</i> for the template is coming soon, so keep watch. In the meantime, feel free to tinker around and modify our template.<br>
                Logo Credits goto <a href="https://www.pinterest.com/utkarah_alpuria/portfolio/"><code>Utkarsh Alpuria</code></a><br>
                Also, a shout out to the <a href="xkcd.com"><code>xkcd Comics</code></a> of whom the designers are big fans.<br><br>
               <a class="github-button" href="https://github.com/theboxahaan/deciphered-jekyll" data-color-scheme="no-preference: light; light: light; dark: dark;" aria-label="Watch theboxahaan/deciphered-jekyll on GitHub">GitHub Repo</a>
               <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/theboxahaan/deciphered-jekyll">
               <!-- <img alt="GitHub" src="https://img.shields.io/github/license/theboxahaan/deciphered-jekyll">
               <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/theboxahaan/deciphered-jekyll"> -->
            </p>
        </div>
    </div>      
    <div class="spacer-small"></div>  
</div>
