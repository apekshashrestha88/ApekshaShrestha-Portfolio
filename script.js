// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic year in footer
const yearElement = document.createElement('span');
yearElement.id = 'year';
yearElement.textContent = new Date().getFullYear();

const footer = document.querySelector('footer');
footer.innerHTML += ` © <span id="year"></span> Apeksha Shrestha. All rights reserved.`;
footer.appendChild(yearElement);
