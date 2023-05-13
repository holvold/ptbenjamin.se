<script>
  import Header from "./Header.svelte";
  import "./styles.css";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <footer class="footer footer-big footer-color-black" data-color="black">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-3">
          <div class="info">
            <h5 class="title">Smart Hälsa</h5>
            <nav>
              <ul>
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
            </nav>
          </div>
        </div>
        <div class="col-md-3 col-md-offset-1 col-sm-3">
          <div class="info">
            <h5 class="title">Help and Support</h5>
            <nav>
              <ul>
                <li>
                  <a href="#contactme">Kontakta</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ptbenjamin_/">Bilder</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col-md-3 col-md-offset-1 col-sm-3">
          <div class="info">
            <h5 class="title">Följ mig på</h5>
            <nav>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/ptbenjamin_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-social btn-intagram btn-simple"
                  >
                    <i class="fa fa-instagram" /> @ptbenjamin_
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/nykvarn_smart_club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-social btn-instagram btn-simple"
                  >
                    <i class="fa fa-instagram" /> @nykvarn_smart_club
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.smartlifestyle.se/"
                    target="_blank"
                    class="btn btn-social btn-twitter btn-simple"
                  >
                    <i class="fa fa-globe" /> smartlifestyle.se
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.nykvarnsif.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-social btn-reddit btn-simple"
                  >
                    <i class="fa fa-globe" /> nykvarnsif.se
                  </a>
                </li>
              </ul>
            </nav>
          </div>
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
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
