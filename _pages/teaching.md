---
layout: page
permalink: /teaching/
title: teaching
description: Courses I have taught or assisted with.
nav: true
nav_order: 4
_styles: |
  .teaching-page { max-width: 860px; }
  .teaching-year-group + .teaching-year-group { margin-top: 2.5rem; }
  .teaching-year-title {
    margin: 0 0 .65rem;
    font-size: 1.45rem;
    font-weight: 650;
    line-height: 1.35;
    letter-spacing: -.02em;
  }
  .teaching-institution {
    display: grid;
    grid-template-columns: 54px minmax(0, 1fr);
    align-items: start;
    gap: 1.1rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .teaching-year-group:last-child .teaching-institution { border-bottom: 0; }
  .teaching-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
    padding: 8px;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
  }
  .teaching-logo img { display: block; width: 100%; height: 100%; object-fit: contain; }
  .teaching-body { min-width: 0; overflow-wrap: break-word; }
  .teaching-institution-name {
    margin: 0;
    font-size: 1.11rem;
    font-weight: 650;
    line-height: 1.4;
    letter-spacing: -.012em;
  }
  .teaching-course-list { margin-top: .85rem; }
  .teaching-course + .teaching-course {
    margin-top: .95rem;
    padding-top: .85rem;
    border-top: 1px dashed var(--global-divider-color);
  }
  .teaching-course-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: .3rem 1.1rem;
  }
  .teaching-course-name {
    margin: 0;
    font-size: .97rem;
    font-weight: 550;
    line-height: 1.5;
  }
  .teaching-term {
    flex-shrink: 0;
    font-size: .84rem;
    line-height: 1.5;
    color: var(--global-text-color-light);
    white-space: nowrap;
  }
  .teaching-role {
    margin: .2rem 0 0;
    font-size: .88rem;
    line-height: 1.55;
    color: var(--global-text-color-light);
  }
  .teaching-links {
    display: flex;
    flex-wrap: wrap;
    gap: .35rem 1.15rem;
    margin: .45rem 0 0;
    font-size: .88rem;
    line-height: 1.5;
  }
  .teaching-links a { color: var(--global-theme-color); }
  .teaching-links a:hover { text-decoration: underline; }
  @media (max-width: 600px) {
    .teaching-year-group + .teaching-year-group { margin-top: 2rem; }
    .teaching-year-title { font-size: 1.34rem; }
    .teaching-institution {
      grid-template-columns: 44px minmax(0, 1fr);
      gap: .8rem;
      padding: 1.1rem 0;
    }
    .teaching-logo { width: 44px; height: 44px; padding: 6px; border-radius: 10px; }
    .teaching-course-list { margin-top: .7rem; }
    .teaching-course-header {
      flex-direction: column;
      align-items: flex-start;
      gap: .1rem;
    }
    .teaching-term { font-size: .81rem; white-space: normal; }
  }
---

<div class="teaching-page">

  <section class="teaching-year-group" aria-labelledby="teaching-2026">
    <h2 class="teaching-year-title" id="teaching-2026">2026</h2>
    <div class="teaching-institution">
      <div class="teaching-logo">
        <img src="{{ '/assets/img/univie_logo.png' | relative_url }}" alt="" loading="lazy">
      </div>
      <div class="teaching-body">
        <h3 class="teaching-institution-name">University of Vienna</h3>
        <div class="teaching-course-list">

          <article class="teaching-course">
            <div class="teaching-course-header">
              <h4 class="teaching-course-name">Geo-Data and Geo-Data Management</h4>
              <span class="teaching-term">Winter 2026</span>
            </div>
            <p class="teaching-role">Lecturer</p>
          </article>

          <article class="teaching-course">
            <div class="teaching-course-header">
              <h4 class="teaching-course-name">Geographic Information Retrieval</h4>
              <span class="teaching-term">Winter 2026</span>
            </div>
            <p class="teaching-role">Lecturer</p>
          </article>

          <article class="teaching-course">
            <div class="teaching-course-header">
              <h4 class="teaching-course-name">Conceptual Modelling and Programming</h4>
              <span class="teaching-term">Summer 2026</span>
            </div>
            <p class="teaching-role">Lecturer</p>
            <nav class="teaching-links" aria-label="Conceptual Modelling and Programming course links">
              <a href="https://yingjinghuang.github.io/290701-Conceptual-Modelling-and-Programming/">Course Page ↗</a>
              <a href="https://ufind.univie.ac.at/en/course.html?lv=290701&amp;semester=2026S">University Catalog ↗</a>
            </nav>
          </article>

        </div>
      </div>
    </div>
  </section>

  <section class="teaching-year-group" aria-labelledby="teaching-2025">
    <h2 class="teaching-year-title" id="teaching-2025">2025</h2>
    <div class="teaching-institution">
      <div class="teaching-logo">
        <img src="{{ '/assets/img/pku_logo.png' | relative_url }}" alt="" loading="lazy">
      </div>
      <div class="teaching-body">
        <h3 class="teaching-institution-name">Peking University</h3>
        <div class="teaching-course-list">
          <article class="teaching-course">
            <div class="teaching-course-header">
              <h4 class="teaching-course-name">Spatial Analysis and GIS Applications</h4>
              <span class="teaching-term">Spring 2025</span>
            </div>
            <p class="teaching-role">Teaching Assistant</p>
          </article>
        </div>
      </div>
    </div>
  </section>

</div>
