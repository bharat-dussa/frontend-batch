(function () {
  const sidebar = document.getElementById("sidebar");
  const burger = document.getElementById("burger");
  const closeBtn = document.getElementById("closeBtn");
  const overlay = document.getElementById("overlay");
  const focusablesSelector =
    'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
  let lastFocused = null;

  function openMenu() {
    lastFocused = document.activeElement;
    sidebar.classList.add("open");
    overlay.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    sidebar.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const focusables = sidebar.querySelectorAll(focusablesSelector);
    if (focusables.length) {
      focusables[0].focus();
    }
  }

  function closeMenu() {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    sidebar.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function trapFocus(e) {
    if (!sidebar.classList.contains("open")) return;
    if (e.key !== "Tab") return;
    const focusables = [...sidebar.querySelectorAll(focusablesSelector)].filter(
      (el) => !el.hidden && !el.disabled
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // Events
  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    if (expanded) closeMenu();
    else openMenu();
  });
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
    trapFocus(e);
  });

  window.addEventListener("hashchange", closeMenu);
})();
