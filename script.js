const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn"),
  menuItems = navId.querySelectorAll(".nav_menu_item"); // Seleciona todos os itens do menu

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// ==== HIDE MENU ON ITEM CLICK ==== //
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    navId.classList.remove("show"); // Fecha o menu ao clicar em um item
  });
});

// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== Animate on Scroll View====//

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão de link, que é navegar para a URL especificada no atributo href. No caso da rolagem suave, queremos evitar que isso aconteça para que possamos implementar nossa própria lógica de rolagem.

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Função para rolar suavemente
        function smoothScroll(target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1500; // Duração em milissegundos
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                const ease = easeInOutQuad(progress);

                window.scrollTo(0, startPosition + distance * ease);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }

            requestAnimationFrame(animation);
        }

        smoothScroll(targetElement);
    });
});


// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});
// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});
// ==== MAIN HEADING  ==== //
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1,
});
// ==== INFO TEXT ==== //
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== CTA BUTTONS ==== //
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== MEDICINE IMAGE ==== //
gsap.from(".medicine_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});