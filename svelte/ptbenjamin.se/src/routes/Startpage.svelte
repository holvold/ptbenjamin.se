<script lang="ts">
  import lagbild from "$lib/images/img/Lagbild.jpg";
</script>

<div class="container" style="background-image: url({lagbild})">
  <div class="content">
    <div class="title-area">
      <p>Intensive Awards - Årets Personliga Tränare 2022</p>
      <h1 class="title-modern">Benjamin Wahlgren</h1>
      <h3>KOST • TRÄNING • HÄLSA</h3>
    </div>

    <button class="btn-contact-me">
      <a href="#contactme" class="btn btn-white btn-fill btn-lg"> Kontakta </a>
    </button>
  </div>
</div>

<style>
  .title-area {
    font-family: "Cambo", "Times New Roman", serif;
  }
  .title-modern {
    font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 3em;
    font-weight: 200;
    text-shadow: -2px 2px 0px rgba(0, 0, 0, 0.3),
      -2px 4px 2px rgba(0, 0, 0, 0.1);
  }
  .container {
    position: static;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
  }

  .btn-contact-me {
    background-color: #fff;
    border: none;
    padding: 15px 32px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  }

  .btn-contact-me a {
    color: #888888;
    text-align: center;
    opacity: 0.9;
    text-decoration: none;
  }

  .btn-contact-me:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
</style>
