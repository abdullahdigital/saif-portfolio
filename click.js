// Get all the images with the "enlargeable-image" class
var images = document.querySelectorAll('.enlargeable-image');

// Loop through all the images and add a click event listener to each
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', handleClick);
}

// Create a function to handle clicks on the enlarged image
function handleClick(event) {
  // Create a new element for the enlarged image
  var enlarged = document.createElement('div');
  enlarged.classList.add('enlarged-image');
  
  // Create a new element for the close button
  var closeButton = document.createElement('div');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;'; // add a close symbol to the button
  enlarged.appendChild(closeButton); // add the close button to the enlarged element
  
  // Create a new element for the image and set its source
  var img = document.createElement('img');
  img.src = event.target.src;
  enlarged.appendChild(img); // add the image to the enlarged element
  
  // Add the enlarged element to the body
  document.body.appendChild(enlarged);

  // Create a function to handle clicks on the enlarged element
  function handleEnlargedClick(event) {
    // Check if the click is on the close button or anywhere else outside the image
    if (event.target.classList.contains('close-button') || event.target === enlarged) {
      // Remove the enlarged element from the body
      document.body.removeChild(enlarged);
      // Remove the event listener from the enlarged element
      enlarged.removeEventListener('click', handleEnlargedClick);
    }
  }

  // Add an event listener to the enlarged element to handle clicks
  enlarged.addEventListener('click', handleEnlargedClick);
}


//Scroll

window.addEventListener('scroll', function() {
  var scrollArrow = document.querySelector('#scroll-top');
  if (window.scrollY > 60) {
    scrollArrow.classList.add('active');
  } else {
    scrollArrow.classList.remove('active');
  }
});




//togglebtn
window.onscroll = () => {
  Themetoggle.classList.remove("active");
}

let Themetoggle = document.querySelector(".toggleTheme");
let toggleBtn = document.querySelector(".toggleBtn");
let changecolorBtns = document.querySelectorAll(".changecolor");
let themeButtons = document.querySelectorAll(".toggleTheme .theme-btn");

toggleBtn.onclick = () => {
  Themetoggle.classList.toggle("active");
}

themeButtons.forEach((btn) => {
  btn.onclick = () => {
      let color = btn.style.background;
      changecolorBtns.forEach((changeBtn) => {
          changeBtn.style.backgroundColor = color;
      });
  };
});

// Click event for changecolor buttons
changecolorBtns.forEach((btn) => {
  btn.onclick = () => {
      let color = window.getComputedStyle(btn, null).getPropertyValue("background-color");
      // Apply the color to specific elements
      // Example: document.getElementById("elementId").style.backgroundColor = color;
  };
});



document.addEventListener("DOMContentLoaded", function() {
  //download
  document.getElementById("downloadPdfButton").addEventListener("click", function() {
    // Create a new jsPDF instance
    var doc = new jsPDF();

    // Set the background color
    var backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--main");
    doc.setFillColor(backgroundColor);
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');

    // Add your content to the PDF
    // Example: doc.text(20, 20, 'Hello, World!');

    // Save the PDF
    doc.save("portfolio.pdf");
  });
});




