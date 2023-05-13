<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
</script>

<nav id="navbar" class="navbar">
  <div class="brand-title">Benjamin Wahlgren</div>
  <p class="toggle-button">
    <span class="bars" />
    <span class="bars" />
    <span class="bars" />
  </p>
  <div class="navbar-links">
    <ul>
      <li><a href="#" class="elems">Start</a></li>
      <li>
        <a href="https://www.instagram.com/ptbenjamin_/" class="elems">Bilder</a
        >
      </li>
      <li><a href="#contactme" class="elems">Kontakta</a></li>
    </ul>
  </div>
</nav>

<style>
  .navbar {
    z-index: 4;
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    border-radius: 0;
  }

  .brand-title {
    font-size: 2rem;
    margin: 0.5rem;
  }

  .navbar li {
    padding: 15px;
  }

  .navbar li a {
    font-size: 20px;
  }

  .navbar-links ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  .navbar-links li {
    list-style: none;
  }

  .navbar-links li p {
    text-decoration: none;
    color: white;
    padding: 1rem;
    display: block;
  }

  .navbar-links li:hover {
    background-color: #555;
  }

  .toggle-button {
    position: absolute;
    top: 0.75rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
  }

  .toggle-button .bars {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    .toggle-button {
      display: flex;
    }

    .navbar-links {
      display: none;
      width: 100%;
    }

    .navbar {
      flex-direction: column;
      align-items: flex-start;
    }

    .navbar-links ul {
      flex-direction: column;
      width: 100%;
    }

    .navbar-links li {
      text-align: center;
    }

    .navbar-links li p {
      padding: 0.5rem 1rem;
    }

    .navbar-links.active {
      display: flex;
    }
  }
</style>
