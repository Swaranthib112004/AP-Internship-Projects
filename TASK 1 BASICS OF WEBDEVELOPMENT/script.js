// Show alert on clicking contact email button
document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.querySelector(".contact-btn");

  contactBtn.addEventListener("click", (e) => {
    alert("Opening your email app to contact me. Thank you! 📧");
  });

  // Highlight nav links on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Scroll to top button (optional feature)
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.innerText = "⬆️";
  scrollTopBtn.style.position = "fixed";
  scrollTopBtn.style.bottom = "30px";
  scrollTopBtn.style.right = "30px";
  scrollTopBtn.style.padding = "10px 15px";
  scrollTopBtn.style.border = "none";
  scrollTopBtn.style.borderRadius = "50%";
  scrollTopBtn.style.background = "#00f5d4";
  scrollTopBtn.style.color = "#111";
  scrollTopBtn.style.cursor = "pointer";
  scrollTopBtn.style.fontSize = "20px";
  scrollTopBtn.style.display = "none";
  scrollTopBtn.style.zIndex = "1000";
  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
});
