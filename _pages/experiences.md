---
layout: page
permalink: /experiences/
title: experiences
description:
nav: true
nav_order: 3
_styles: |
  .experience-page { max-width: 860px; }
  .experience-section + .experience-section { margin-top: 2.5rem; }
  .experience-section-title {
    margin: 0 0 .65rem;
    font-size: 1.45rem;
    font-weight: 650;
    line-height: 1.35;
    letter-spacing: -.02em;
  }
  .experience-entry {
    display: grid;
    grid-template-columns: 54px minmax(0, 1fr);
    align-items: start;
    gap: 1.1rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .experience-entry:last-child { border-bottom: 0; }
  .experience-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    padding: 8px;
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    background: var(--global-card-bg-color);
  }
  .experience-logo img { display: block; width: 100%; height: 100%; object-fit: contain; }
  .experience-content { min-width: 0; overflow-wrap: break-word; }
  .experience-header,
  .experience-degree-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: .3rem 1.1rem;
  }
  .experience-header h3 {
    margin: 0;
    font-size: 1.11rem;
    font-weight: 650;
    line-height: 1.4;
    letter-spacing: -.012em;
  }
  .experience-date {
    flex-shrink: 0;
    color: var(--global-text-color-light);
    font-size: .84rem;
    white-space: nowrap;
  }
  .experience-role {
    margin: .32rem 0 .16rem;
    font-size: .98rem;
    font-weight: 550;
    line-height: 1.5;
  }
  .experience-location,
  .experience-detail {
    margin: .18rem 0 0;
    font-size: .88rem;
    line-height: 1.55;
    color: var(--global-text-color-light);
  }
  .experience-detail a { color: var(--global-theme-color); }
  .experience-detail a:hover { text-decoration: underline; }
  .experience-degrees { margin-top: .85rem; }
  .experience-degree + .experience-degree {
    margin-top: .95rem;
    padding-top: .85rem;
    border-top: 1px dashed var(--global-divider-color);
  }
  .experience-degree h4 {
    margin: 0;
    font-size: .97rem;
    font-weight: 550;
    line-height: 1.5;
  }
  @media (max-width: 600px) {
    .experience-section + .experience-section { margin-top: 2rem; }
    .experience-section-title { font-size: 1.34rem; }
    .experience-entry {
      grid-template-columns: 44px minmax(0, 1fr);
      gap: .8rem;
      padding: 1.1rem 0;
    }
    .experience-logo { width: 44px; height: 44px; padding: 6px; border-radius: 10px; }
    .experience-header,
    .experience-degree-header { flex-direction: column; align-items: flex-start; gap: .1rem; }
    .experience-date { white-space: normal; font-size: .81rem; }
    .experience-role { margin-top: .38rem; }
    .experience-degrees { margin-top: .7rem; }
  }
---

<div class="experience-page">

  <section class="experience-section" aria-labelledby="experience-work-title">
    <h2 class="experience-section-title" id="experience-work-title">Work</h2>
    <div class="experience-list">

      <article class="experience-entry">
        <div class="experience-logo"><img src="{{ '/assets/img/univie_logo.png' | relative_url }}" alt="" loading="lazy"></div>
        <div class="experience-content">
          <div class="experience-header">
            <h3>University of Vienna</h3>
            <span class="experience-date">Mar. 2026 – Present</span>
          </div>
          <p class="experience-role">University Assistant (Postdoc)</p>
          <p class="experience-location">Vienna, Austria</p>
          <p class="experience-detail">Working with <a href="https://ufind.univie.ac.at/de/person.html?id=1001662">Krzysztof Janowicz</a></p>
        </div>
      </article>

      <article class="experience-entry">
        <div class="experience-logo"><img src="{{ '/assets/img/mit_logo.png' | relative_url }}" alt="" loading="lazy"></div>
        <div class="experience-content">
          <div class="experience-header">
            <h3>MIT Senseable City Lab</h3>
            <span class="experience-date">Jan. 2023 – Jan. 2024</span>
          </div>
          <p class="experience-role">Visiting Ph.D. Student</p>
          <p class="experience-location">Cambridge, MA, USA</p>
          <p class="experience-detail">Advisors: <a href="https://scholar.google.com/citations?user=UF2gBtMAAAAJ">Carlo Ratti</a>, <a href="https://scholar.google.com/citations?user=oI9m0yYAAAAJ">Fábio Duarte</a>, <a href="https://scholar.google.com/citations?user=FcRSf0IAAAAJ">Simone Mora</a></p>
        </div>
      </article>

    </div>
  </section>

  <section class="experience-section" aria-labelledby="experience-education-title">
    <h2 class="experience-section-title" id="experience-education-title">Education</h2>
    <div class="experience-list">

      <article class="experience-entry">
        <div class="experience-logo"><img src="{{ '/assets/img/pku_logo.png' | relative_url }}" alt="" loading="lazy"></div>
        <div class="experience-content">
          <div class="experience-header">
            <h3>Peking University</h3>
            <span class="experience-date">Sep. 2021 – Jun. 2025</span>
          </div>
          <p class="experience-role">Ph.D. in Geographic Information Science</p>
          <p class="experience-location">Beijing, China</p>
          <p class="experience-detail">Advisors: <a href="https://scholar.google.com/citations?user=Xh_lRY4AAAAJ&amp;hl=en">Yu Liu</a>, <a href="https://scholar.google.com/citations?user=dc1TzLoAAAAJ&amp;hl=en">Fan Zhang</a></p>
        </div>
      </article>

      <article class="experience-entry">
        <div class="experience-logo"><img src="{{ '/assets/img/whu_logo.png' | relative_url }}" alt="" loading="lazy"></div>
        <div class="experience-content">
          <div class="experience-header">
            <h3>Wuhan University</h3>
          </div>
          <p class="experience-location">Wuhan, China</p>
          <div class="experience-degrees">
            <div class="experience-degree">
              <div class="experience-degree-header">
                <h4>M.S. in Geographic Information Science</h4>
                <span class="experience-date">Sep. 2018 – Jun. 2021</span>
              </div>
              <p class="experience-detail">Advisor: <a href="https://only4john.github.io/">Teng Fei</a></p>
            </div>
            <div class="experience-degree">
              <div class="experience-degree-header">
                <h4>B.Sc. in Geographic Science</h4>
                <span class="experience-date">Sep. 2013 – Jun. 2017</span>
              </div>
              <p class="experience-detail">Advisors: Yiyun Chen, <a href="https://only4john.github.io/">Teng Fei</a></p>
            </div>
          </div>
        </div>
      </article>

    </div>
  </section>



</div>
