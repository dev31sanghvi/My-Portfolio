//PAGE TRANSITION FUNCTION
function pageTransition() {
  const anchors = document.querySelectorAll("a");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 800);
}

//NAV BAR FUNCTIONALITY
function openNav() {
  document.getElementById("mySidebar").style.width = "230px";
  //document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  //document.getElementById("main").style.marginLeft = "0";
}

// reveal animation
let sr = ScrollReveal({

  duration:2500,
  distance:"60px",
});

sr.reveal(".main",{delay:600});
sr.reveal(".main",{ origin:"top",delay:700});



window.addEventListener("scroll",()=>{
  skillsCounter();

})


// project


// project

//FORM VALIDATION


