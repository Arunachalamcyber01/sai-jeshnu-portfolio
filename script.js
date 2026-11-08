// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Fade project cards in as they scroll into view
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Count up the hero stats
document.querySelectorAll("[data-count]").forEach((el) => {
  const target = +el.dataset.count;
  const start = performance.now();
  const dur = 1400;
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
});

// Subtle parallax on the giant PORTFOLIO word
const giant = document.querySelector(".giant");
window.addEventListener("scroll", () => {
  giant.style.transform = `translateX(-50%) translateY(${window.scrollY * 0.25}px)`;
}, { passive: true });
