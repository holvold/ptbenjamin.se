<script>
  import "./styles.css";
</script>

<div class="app">
  <main>
    <slot />
  </main>

  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col1">
          <h5 class="title">Smart Hälsa</h5>
          <ul class="info">
            <li>
              <p>Skälbyvägen 12 (Mörbyområdet)</p>
            </li>
            <li>
              <p>155 35 Nykvarn</p>
            </li>
            <li>
              <p>TRAIN@SMARTHALSANYKVARN.SE</p>
            </li>
          </ul>
        </div>
        <div class="col2">
          <h5 class="title">Help and Support</h5>
          <ul class="info">
            <li>
              <a href="#contactme">Kontakta</a>
            </li>
            <li>
              <a href="https://www.instagram.com/ptbenjamin_/">Bilder</a>
            </li>
          </ul>
        </div>
        <div class="col3">
          <h5 class="title">Följ mig på</h5>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/ptbenjamin_/"
                target="_blank"
                rel="noopener noreferrer"
                class="follow-me-link"
              >
                <i class="fab fa-instagram" /> @ptbenjamin_
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nykvarn_smart_club/"
                target="_blank"
                rel="noopener noreferrer"
                class="follow-me-link"
              >
                <i class="fab fa-instagram" /> @nykvarn_smart_club
              </a>
            </li>
            <li>
              <a
                href="https://www.smartlifestyle.se/"
                target="_blank"
                class="follow-me-link"
              >
                <i class="fa-sharp fa-solid fa-up-right-from-square" /> smartlifestyle.se
              </a>
            </li>
            <li>
              <a
                href="http://www.nykvarnsif.se/"
                target="_blank"
                rel="noopener noreferrer"
                class="follow-me-link"
              >
                <i class="fa-sharp fa-solid fa-up-right-from-square" /> nykvarnsif.se
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="copyright">
        {`© ${new Date().getFullYear()} Benjamin Wahlgren`}
      </div>
    </div>
  </footer>
</div>

<style>
  @import "@fortawesome/fontawesome-free/css/all.css";

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .info p {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
  }

  .info a {
    color: #777777;
    text-decoration: none;
    opacity: 0.7;
    font-size: 12px;
    font-weight: 500;
  }

  .info a:hover {
    opacity: 1;
  }

  /* create 3 classes col1, col2, col3 where each column take upp 33% of the footer */
  .col1,
  .col2 {
    width: 25%;
    font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: bold;
  }

  .col3 {
    width: 50%;
  }

  .follow-me-link {
    color: #fff;
    text-decoration: none;
  }

  .follow-me-link:hover {
    color: #777777;
  }

  .footer {
    background-color: #1e1e1ef7;
    color: #777777;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .title {
    color: #fff;
    opacity: 0.7;
    font-family: "Cambo", "Times New Roman", serif;
  }

  .container {
    margin: 0 300px 0 300px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  hr {
    border: 0px;
    height: 1px;
    background-color: #444444;
  }

  .copyright {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: center;
    color: #777777;
    opacity: 0.7;
    font-size: 0.8rem;
    margin: 20px;
  }
</style>
