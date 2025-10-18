const images = document.querySelectorAll('.scroll-image');
const clipPath = document.getElementById('clipPath');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

  // scroll progress between 0 and 1
  const scrollProgress = scrollY / totalScrollHeight;

  clipPath.style.clipPath = `circle(${scrollProgress * 1000}% at 49% 42%)`;
  // decide which image index to show
  const index = Math.min(
    images.length - 1,
    Math.floor(scrollProgress * images.length * 1.2) // tweak multiplier for speed
  );

  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
});
