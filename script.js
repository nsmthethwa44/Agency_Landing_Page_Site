// toggle menu and menu button
let menuImg = document.querySelector(".menuImg");
let navbar = document.querySelector(".navbar");
let closeImg = document.querySelector(".closeImg");
menuImg.onclick = () => { 
  menuImg.classList.add("active");
  navbar.classList.add("active");
}
// when close button is clicked remove active classes
closeImg.onclick = () => { 
  menuImg.classList.remove("active");
  navbar.classList.remove("active");
}
// when a user scrolls remove active classes
window.onscroll = () => { 
menuImg.classList.remove("active");
  navbar.classList.remove("active");

  let goTop = document.querySelector(".goTop");
  if (window.scrollY > 200) {
    goTop.classList.add("active");
  } else { 
    goTop.classList.remove("active");
  }
}

// set active class on navigation links
let navLinks =  document.querySelectorAll(".navbar .nav li a");
Array.from(navLinks).forEach((item, index) => { 
  item.onclick = (e) => { 
let activeNavLink =  document.querySelector(".navbar .nav li a.active");
    activeNavLink.classList.remove("active");
    e.target.classList.add("active");
    menuImg.classList.remove("active");
    navbar.classList.remove("active");
  }
})