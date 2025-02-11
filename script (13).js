const buttons = document.querySelectorAll('.roadmap-btn');
const images = document.querySelectorAll('.image-container img');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and images
    buttons.forEach(btn => btn.classList.remove('active'));
    images.forEach(img => img.classList.remove('active'));

    // Add active class to the clicked button and corresponding image
    button.classList.add('active');
    images[index].classList.add('active');
  });
});