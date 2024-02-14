burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navItems = document.querySelector('.nav-items');
button = document.querySelector('.button');

burger.addEventListener('click',()=>{
  navItems.classList.toggle('v-class')
  button.classList.toggle('v-class')
  navbar.classList.toggle('h-class')
})