<script>
  import { onMount } from "svelte";
  import { gsap, Power2 } from "gsap";

  let isMenuOpen = false;

  function toggleMenu() {
    console.log("click");
    isMenuOpen = !isMenuOpen;

    const menuOverlay = document.querySelector(".menu-overlay");

    if (isMenuOpen) {
      gsap.to(menuOverlay, {
        duration: 0.5,
        opacity: 1,
        display: "block",
        ease: Power2.easeOut,
      });
      animateMenuItems(".menu-item", 0.5);
    } else {
      gsap.to(menuOverlay, {
        duration: 0.5,
        opacity: 0,
        display: "none",
        ease: Power2.easeOut,
      });
      animateMenuItems(".menu-item", 0);
    }
  }

  function closeMenu() {
    const menuOverlay = document.querySelector(".menu-overlay");
    animateMenuItems(".menu-item", 0);
    gsap.to(menuOverlay, {
      duration: 0.5,
      opacity: 0,
      ease: Power2.easeOut,
    });
  }

  function animateMenuItems(selector, delay) {
    const menuItems = document.querySelectorAll(selector);

    menuItems.forEach((item, index) => {
      console.log("asd", isMenuOpen);
      gsap.to(item, {
        duration: 0.5,
        opacity: isMenuOpen ? 1 : 0,
        y: isMenuOpen ? 0 : -20,
        delay: index * 0.1 + delay,
      });
    });
  }
</script>

<nav class="flex items-center justify-between p-4 bg-gray-200 text-gray-700">
  <button class="text-2xl" on:click={toggleMenu}>&#9776;</button>
</nav>

<div class="menu-overlay" style={{ display: isMenuOpen ? "block" : "none" }}>
  <div class="menu">
    <span class="close-button" on:click={closeMenu}>&times;</span>
    <div class="menu-item text-4xl">Home</div>
    <div class="menu-item text-4xl">About</div>
    <div class="menu-item text-4xl">Gallery</div>
    <div class="menu-item text-4xl">RSVP</div>
    <div class="menu-item text-4xl">Contact</div>
  </div>
</div>

<style>
  @import "tailwindcss/base.css";
  @import "tailwindcss/components.css";
  @import "tailwindcss/utilities.css";

  /* Custom Tailwind styles */
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 182, 193, 0.8); /* Soft pink background color */
    z-index: 50;
    opacity: 0;
    display: none;
  }

  .menu {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 51;
  }

  .menu-item {
    margin: 10px 0;
    opacity: 0;
    color: #333; /* Dark text color */
  }

  .close-button {
    cursor: pointer;
    font-size: 1.5rem;
    color: #333; /* Dark text color */
  }
</style>
