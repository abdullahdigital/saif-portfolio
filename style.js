// Scroll Reveal
ScrollReveal({ 
    reset: true ,
    distance: '80px' ,
    duration: 2000 ,
    delay: 200 
});
ScrollReveal().reveal('.home-content , .h2', { origin: 'top' });
ScrollReveal().reveal('.home-contentdown', { origin: 'bottom' });
ScrollReveal().reveal('.left', { origin: 'left' });
ScrollReveal().reveal('.right', { origin: 'right' });


// Type Js
const typed = new Typed('.multiple-text', {
    strings: ['Advertising Designer', 'Visual Artist', 'Creative Illustrator'],
    typeSpeed: 300,
    backSpeed: 150,
    backDelay: 100,
    loop: true
  });



  //dark and light
  let btn=document.getElementById("btn5")
  let btnText=document.getElementById("btnText")
  let btnIcon=document.getElementById("btnIcon")


  btn5.onclick=function(){
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        btnIcon.src="img/sun1.webp"
        btnText.innerHTML="Light";
    }else{
        btnIcon.src="img/moon2.webp"
        btnText.innerHTML="Dark";
    }
  }

  

  
  
  




 
  
  

  
  
  

 
  


  
  
  
  
  
  
  
  