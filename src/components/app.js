import React from 'react';

// Styles
import '../styles/main.scss';

const App = () => {
  return (
    <div className="">
      <div class="loader">
        <div class="loader__mask">
          <div class="inner"></div>
        </div>
      </div>
      <div class="loader__content">
        <div class="inner">
          <div class="loader__title">
            <div class="loader__title--mask">
              <span>Anything </span>
            </div>
            <div class="loader__title--mask">
              <span>Is Possible</span>
            </div>
          </div>
          <div class="loader__image">
            <div class="loader__image--mask">
              <img src="./img/img_landscape-01-large.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div class="logo">
        <span class="logo__img"></span>
        <span class="logo__text">Bella</span>
      </div>
      <div class="burger">
        <button class="burger__open">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav class="main-nav">
        <ul>
          <li>
            <a href="#0">Our Values</a>
          </li>
          <li>
            <a href="#0">Portfolio</a>
          </li>
          <li>
            <a href="#0">Blog</a>
          </li>
          <li>
            <a href="#0">How We Work</a>
          </li>
          <li>
            <a href="#0">Contact</a>
          </li>
        </ul>
      </nav>

      <main id="main">
        <header data-color="#ACB7AE">
          <h1>
            <span>Consectetur</span>
            <span>Adipisicing</span>
            <span>Elites</span>
          </h1>
          <p class="subtitle">
            VOLUPTAS AUT <br />& VERITASIS NOSTRUM
          </p>
          <div class="decor__circle"></div>
          <div class="header__gallery">
            <div class="hg__left">
              <div class="hg__image hg__image--l">
                <img src="./img/img_landscape-01-large.jpg" />
              </div>
              <div class="hg__image hg__image--m">
                <img src="./img/img_landscape-02-large.jpg" />
              </div>
              <div class="hg__image hg__image--s">
                <img src="./img/img_landscape-03-large.jpg" />
              </div>
            </div>
            <div class="hg__right">
              <div class="hg__image hg__image--l">
                <img src="./img/img_landscape-03-large.jpg" />
              </div>
              <div class="hg__image hg__image--m">
                <img src="./img/img_landscape-01-large.jpg" />
              </div>
              <div class="hg__image hg__image--s">
                <img src="./img/img_landscape-02-large.jpg" />
              </div>
            </div>
          </div>
          <div class="cta__circle">
            <div class="cta__circle--logo"></div>
          </div>
        </header>

        <article>
          <section class="reveal-gallery">
            <h2 class="chapter">
              <span>001 -</span> Our Values
            </h2>

            <div class="rg__column left" data-color="#a6b3b3">
              <div class="rg__text">
                <div class="rg__text--heading">
                  <span>01</span>
                  <h3>Adipisicing Elitare</h3>
                </div>
                <div class="rg__text--copy">
                  <div class="rg__text--mask">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
              <div class="rg__image">
                <div class="rg__image--mask">
                  <img src="./img/img_landscape-01-large.jpg" />
                </div>
              </div>
            </div>
            <div class="rg__column center" data-color="#b0a7a4">
              <div class="rg__text">
                <div class="rg__text--heading">
                  <span>02</span>
                  <h3>Accusamus Accusantium</h3>
                </div>
                <div class="rg__text--copy">
                  <div class="rg__text--mask">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas aut veritatis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="rg__image">
                <div class="rg__image--mask">
                  <img src="./img/img_landscape-02-large.jpg" />
                </div>
              </div>
            </div>
            <div class="rg__column right" data-color="#a3abb1">
              <div class="rg__text">
                <div class="rg__text--heading">
                  <span>03</span>
                  <h3>Ratione Quibusdam</h3>
                </div>
                <div class="rg__text--copy">
                  <div class="rg__text--mask">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas aut veritatis nostrum ratione quibusdam ea non
                      laudantium accusamus accusantium molestias.
                    </p>
                  </div>
                </div>
              </div>
              <div class="rg__image">
                <div class="rg__image--mask">
                  <img src="./img/img_landscape-03-large.jpg" />
                </div>
              </div>
            </div>
          </section>

          <section class="portfolio with-padding">
            <h2 class="chapter">
              <span>002 -</span> Portfolio
            </h2>
            <div class="portfolio__categories">
              <a
                href="#0"
                data-color="#b3a8b3"
                data-imagelarge="./img/img_portfolio-01-480-720.jpg"
                data-imagesmall="./img/img_portfolio-02-480-720.jpg"
              >
                Voluptas & Veritatis
              </a>
              <a
                href="#0"
                data-color="#bab6a8"
                data-imagelarge="./img/img_portfolio-02-480-720.jpg"
                data-imagesmall="./img/img_portfolio-01-480-720.jpg"
              >
                Nostrum & Quibusdam
              </a>
              <a
                href="#0"
                data-color="#a0abb4"
                data-imagelarge="./img/img_portfolio-01-480-720.jpg"
                data-imagesmall="./img/img_portfolio-02-480-720.jpg"
              >
                Elit & Laudantium
              </a>
              <a
                href="#0"
                data-color="#a3b1ae"
                data-imagelarge="./img/img_portfolio-02-480-720.jpg"
                data-imagesmall="./img/img_portfolio-01-480-720.jpg"
              >
                Tatione & Nona
              </a>
              <a
                href="#0"
                data-color="#afaba2"
                data-imagelarge="./img/img_portfolio-01-480-720.jpg"
                data-imagesmall="./img/img_portfolio-02-480-720.jpg"
              >
                Accusantium Bold
              </a>
            </div>
            <div class="portfolio__image--l">
              <div
                class="image_inside"
                style={{
                  backgroundImage:
                    "url('../assets/imgs/img_portfolio-02-480-720.jpg')",
                }}
              ></div>
            </div>
            <div class="portfolio__image--s">
              <div
                class="image_inside"
                style={{
                  backgroundImage:
                    "url('../assets/imgs/img_portfolio-01-480-720.jpg')",
                }}
              ></div>
            </div>
          </section>

          <section class="blog with-padding-bottom with-parallax">
            <h2 class="chapter">
              <span>003 -</span> Blog
            </h2>
            <div class="blog__post">
              <div class="blog__image">
                <img src="./img/img_portfolio-02-480-720.jpg" />
              </div>
              <div class="blog__text">
                <p class="post__date">17.08.20</p>
                <h3>Quae Accusamus Consequuntur Sequi Ullam</h3>
              </div>
            </div>
          </section>

          <section class="how-we-work with-padding">
            <h2 class="chapter">
              <span>004 -</span> How We Work
            </h2>
            <div class="fixed-nav">
              <ul>
                <li class="is-active">
                  <a href="#stage1">Amet Consectetur </a>
                </li>
                <li>
                  <a href="#stage2">Eum Similique</a>
                </li>
                <li>
                  <a href="#stage3">Cupiditate Vel</a>
                </li>
                <li>
                  <a href="#stage4">Dignissimos Sed</a>
                </li>
              </ul>
            </div>
            <div id="stage1" class="stage with-parallax" data-color="#8c8480">
              <div class="stage__image">
                <img src="./img/img_landscape-01-large.jpg" />
              </div>
              <div class="stage__heading">
                <p>01</p>
                <h3>Amet Consectetur</h3>
              </div>
              <div class="stage__text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate, vel. Vel qui ipsum eum similique reiciendis dicta
                  dignissimos sed ipsa.
                </p>
              </div>
            </div>
            <div id="stage2" class="stage with-parallax" data-color="#505156">
              <div class="stage__image">
                <img src="./img/img_landscape-02-large.jpg" />
              </div>
              <div class="stage__heading">
                <p>02</p>
                <h3>Eum Similique</h3>
              </div>
              <div class="stage__text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate, vel. Vel qui ipsum eum similique reiciendis dicta
                  dignissimos sed ipsa.
                </p>
              </div>
            </div>
            <div id="stage3" class="stage with-parallax" data-color="#717872">
              <div class="stage__image">
                <img src="./img/img_landscape-01-large.jpg" />
              </div>
              <div class="stage__heading">
                <p>03</p>
                <h3>Cupiditate Vel</h3>
              </div>
              <div class="stage__text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate, vel. Vel qui ipsum eum similique reiciendis dicta
                  dignissimos sed ipsa.
                </p>
              </div>
            </div>
            <div id="stage4" class="stage with-parallax" data-color="#ccb28b">
              <div class="stage__image">
                <img src="./img/img_landscape-02-large.jpg" />
              </div>
              <div class="stage__heading">
                <p>04</p>
                <h3>Dignissimos Sed</h3>
              </div>
              <div class="stage__text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate, vel. Vel qui ipsum eum similique reiciendis dicta
                  dignissimos sed ipsa.
                </p>
              </div>
            </div>
          </section>

          <section class="contact with-padding-bottom is-flipped with-parallax">
            <h2 class="chapter">
              <span>005 -</span> Contact
            </h2>
            <div class="blog__post">
              <div class="blog__image">
                <img src="./img/img_portfolio-02-480-720.jpg" />
              </div>
              <div class="blog__text">
                <h3>Quae Accusamus Consequuntur</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, sed.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>

      <aside
        class="fill-background"
        style={{ backgroundColor: '#ACB7AE' }}
      ></aside>
    </div>
  );
};

export default App;
