function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

function headerShadow() {
  const navHeader = document.getElementById("header");
  const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;

  window.requestAnimationFrame(() => {
    if (scrollPos > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  });
}

window.onscroll = function () {
  headerShadow();
};

var typingEffect = new Typed(".typedText", {
  strings: ["Web-Designer", "Java Developer", "Frontend Developer", "Backend Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1200,
  reset: false 
  // Consider turning off reset if animations only need to run once
});

sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });
sr.reveal('.project-box', { interval: 200 });
sr.reveal('.top-header', {});

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 1500,
  reset: false
});

srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 1500,
  reset: false
});

srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

const sections = document.querySelectorAll('section[id]');
let scrollTimeout;

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link && link.classList.add('active-link');
    } else {
      link && link.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', function () {
  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(scrollActive, 100);
}, { passive: true });


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    alert('Thank you! Your message has been sent.');
    document.getElementById('contactForm').reset(); // Clear form
  }, function(error) {
    console.error('FAILED...', error);
    alert('Oops! Something went wrong. Please try again.');
  });
});
