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
            document.querySelector('.header').style.background = 'var(--light-color)';
            $('.nav__toggle').css('color', '#000')
            document.querySelectorAll('.header a').forEach(function (a) {
                  a.style.color = '#000';
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
$('.icon-name').hide()