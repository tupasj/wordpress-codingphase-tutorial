var menuBtn = document.getElementsByClassName('menu-btn')
var mobileMenu = document.getElementsByClassName('mobile-menu')
var clickedBtn = function() {
  mobileMenu[0].classList.toggle('active')
  console.log('toggle menu');
}

menuBtn[0].addEventListener('click', clickedBtn)

console.log(menuBtn[0])
