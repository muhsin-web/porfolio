"use strict";

      //      ########## PRELOADER ##########
      const preloader = document.getElementById("preloader");
      window.addEventListener("load", function(){
            preloader.style.display = "none";
      });

      // ############ SHOW MENUBAR #############
const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)
      const navLink = document.querySelectorAll('.nav__link')
      console.log(navLink)
      if (toggle && nav) {
            toggle.addEventListener('click', function(){
                  nav.classList.toggle('show')
                  navLink.forEach((cur) => {
                        cur.addEventListener('click', function () {
                              nav.classList.remove('show')
                        })
                  });
            })
      } 
}
showMenu('nav-toggle', 'nav-menu');

// ########### REVIEW SLIDER ##########

const reviewSlides = document.querySelectorAll('.review');
reviewSlides.forEach(function (cur, i) {
      cur.style.transform = `translateX(${100 * i}%)`;
  })

  let curSlide = 0;
  setInterval(function(){
      if (curSlide === reviewSlides.length - 1) {
            curSlide = 0;
      } else {
            curSlide++;
      }
        reviewSlides.forEach(function (cur, i) { 
              cur.style.transform = `translateX(${100 * (i - curSlide)}%)`;
         })
  }, 5000);

//   ######## STICKY HEADER ##########
const navHeight = document.querySelector('header').getBoundingClientRect().height;
const hero = document.querySelector('.hero')
const headerCallBk = function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) {
            document.querySelector('.header').classList.add('sticky');
            document.querySelector('.header').style.background = 'var(--secondary-color)';
            $('.nav__toggle').css('color', '#fff')
            document.querySelectorAll('.header a').forEach(function (a) {
                  a.style.color = '#fff';
              })
            }
      else  {
            document.querySelector('.header').classList.remove('sticky');
            document.querySelector('.header').style.background = 'rgba(0, 0, 0, 0.619)';
            $('.nav__toggle').css('color', '#fff')
            document.querySelectorAll('.header a').forEach(function (a) {
                  a.style.color = '#fff';
              })
      }
}
const headObserver = new IntersectionObserver(headerCallBk, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
});
headObserver.observe(hero);

// ############ JQUERY ############



$(document).ready(function () {

            // #################### DARK MODE ###############
      $('.mode').click(function (e) {
            $('.mode').toggleClass('dark')
            $('.mode').toggleClass('light')
            $('.state_icon').toggleClass('fa-sun')
            if (e.target.classList.contains('dark')) {
                        document.documentElement.style.setProperty('--light-color', '#252d2f');
                        document.documentElement.style.setProperty('--color', 'rgba(0, 0, 0, 0.899)');
                        document.documentElement.style.setProperty('--hero-color', 'rgba(225, 225, 225)');
                        document.documentElement.style.setProperty('--color-1', '#fff');
                        document.documentElement.style.setProperty('--card-color', 'rgba(138, 136, 136, 0.1)');
                        document.documentElement.style.setProperty('--color-3', '#030f12');
                        document.documentElement.style.setProperty('--dark-color', 'rgba(0, 0, 0, 0.94)');
                        document.getElementById('git').style.color = '#fff';
                        document.querySelectorAll('.header a').forEach(function (a) {
                              a.style.color = '#fff';
                          })
                  } else {
                        document.documentElement.style.setProperty('--light-color', '#adc9d37b');
                        document.documentElement.style.setProperty('--color', '#fff');
                        document.documentElement.style.setProperty('--color-1', '#000');
                        document.documentElement.style.setProperty('--card-color', 'rgba(14, 36, 49, 0.25)');
                        document.documentElement.style.setProperty('--color-3', '#fff');
                  document.documentElement.style.setProperty('--dark-color', '#011629');
                  document.getElementById('git').style.color = '#000';
                        document.documentElement.style.setProperty('--hero-color', 'rgba(2, 13, 28, 0.9)');
                  }
            })
      // $('.preview')
      const clicks = document.querySelectorAll('.preview');
      clicks.forEach(function (value, index) {
            value.addEventListener('click', function (e) {
                  e.preventDefault();
                        const xhr = new XMLHttpRequest();
                        xhr.open('GET', `preview-${index}.html`, true);
                        xhr.onload = function () {
                              if (this.status == 200) {
                                    let output = "";
                                    output += this.responseText
                                    $('.pre').html(`${output}`);
                              } else if (this.status == 404) {
                  setTimeout(function () {
                                    $('.pre').html(`
                                    <h1>404 😞 <span>page not found</span></h1>`).css({
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          width: '100%',
                                          height: '100%',
                                          position: 'fixed',
                                          top: '0',
                                          left: '0',
                                          background: '#fff',
                                          zIndex: '200',
                                          color: '#000',
                                    }).animate({
                                          letterSpacing: '2rem',
                                    })
                  }, 1000)
                              }
                        }
                        // $('.pre').load(`preview-${index + 1}.html`);
                        xhr.send();
            });
      })
      
})