<script>
  import { onMount } from "svelte";

  let isOpen = false;

  onMount(() => {
    // Close the menu when the component is mounted
    closeMenu();
  });

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }
</script>

<nav>
  <ul class="nav-list {isOpen ? 'active' : ''}">
    <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
    <li class="nav-item"><a href="#" class="nav-link">About</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
  </ul>
</nav>
<button class="toggle-btn" on:click={toggleMenu}>Toggle Menu</button>

<style>
  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .nav-item {
    margin-right: 1rem;
  }

  .toggle-btn {
    display: none;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  /* Mobile Menu Styles */
  @media (max-width: 768px) {
    .nav-list {
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background-color: #333;
      display: none;
      flex-direction: column;
      padding: 1rem;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    }

    .nav-list.active {
      display: flex;
    }

    .nav-item {
      margin-bottom: 1rem;
      margin-right: 0;
    }

    .toggle-btn {
      display: block;
    }
  }
</style>
