---
layout: page
permalink: /teaching/
title: teaching
description: University teaching and master's thesis supervision.
nav: true
nav_order: 4
_styles: |
  .teaching-page { max-width: 860px; }
  .teaching-year-group + .teaching-year-group { margin-top: 2.15rem; }
  .teaching-section-heading {
    margin: 0 0 1.2rem;
    font-size: 1.45rem;
    font-weight: 650;
    line-height: 1.35;
    letter-spacing: -.02em;
  }
  .teaching-year-title {
    margin: 0 0 .45rem;
    font-size: 1.02rem;
    font-weight: 650;
    line-height: 1.4;
    color: var(--global-text-color-light);
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
  .teaching-role a { color: var(--global-theme-color); }
  .teaching-role a:hover { text-decoration: underline; }
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
  .teaching-supervision-section { margin-top: 2.65rem; }
  .teaching-supervision-entry {
    display: grid;
    grid-template-columns: 54px minmax(0, 1fr);
    gap: 1.1rem;
    align-items: start;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .teaching-supervision-content { min-width: 0; }
  .teaching-supervision-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: .3rem 1.1rem;
  }
  .teaching-supervision-name {
    margin: 0;
    font-size: 1.11rem;
    font-weight: 650;
    line-height: 1.4;
    letter-spacing: -.012em;
  }
  .teaching-supervision-date {
    flex-shrink: 0;
    font-size: .84rem;
    color: var(--global-text-color-light);
    white-space: nowrap;
  }
  .teaching-supervision-degree {
    margin: .4rem 0 .16rem;
    font-size: .97rem;
    line-height: 1.55;
    font-weight: 550;
  }
  .teaching-supervision-role {
    margin: .18rem 0 0;
    font-size: .88rem;
    line-height: 1.55;
    color: var(--global-text-color-light);
  }
  .teaching-supervision-role a { color: var(--global-theme-color); }
  .teaching-supervision-role a:hover { text-decoration: underline; }
  @media (max-width: 600px) {
    .teaching-year-group + .teaching-year-group { margin-top: 1.65rem; }
    .teaching-section-heading { font-size: 1.34rem; }
    .teaching-year-title { font-size: .99rem; }
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
    .teaching-supervision-section { margin-top: 2.05rem; }
    .teaching-supervision-entry {
      grid-template-columns: 44px minmax(0, 1fr);
      gap: .8rem;
      padding: 1.1rem 0;
    }
    .teaching-supervision-header { align-items: flex-start; flex-direction: column; gap: .1rem; }
    .teaching-supervision-date { font-size: .81rem; white-space: normal; }
  }
---

<div class="teaching-page">

  <section class="teaching-courses-section" aria-labelledby="teaching-courses-title">
    <h2 class="teaching-section-heading" id="teaching-courses-title">Courses</h2>

  <section class="teaching-year-group" aria-labelledby="teaching-2026">
    <h3 class="teaching-year-title" id="teaching-2026">2026</h3>
    <div class="teaching-institution">
      <div class="teaching-logo">
        <img src="{{ '/assets/img/univie_logo.png' | relative_url }}" alt="" loading="lazy">
      </div>
      <div class="teaching-body">
        <h4 class="teaching-institution-name">University of Vienna</h4>
        <div class="teaching-course-list">

          <article class="teaching-course">
            <div class="teaching-course-header">
              <h5 class="teaching-course-name">Geo-Data and Geo-Data Management</h5>
              <span class="teaching-term">Winter 2026</span>
            </div>
            <p class="teaching-role">Lecturer</p>
            <nav class="teaching-links" aria-label="Geo-Data and Geo-Data Management course links">
              <a href="https://yingjinghuang.github.io/Geo-Data-and-Geo-Data-Management/">Course Page ↗</a>
              <a href="https://ufind.univie.ac.at/en/course.html?lv=290700&amp;semester=2026W">University Catalog ↗</a>
            </nav>
          </article>

          <article class="teaching-course">
            <div class="teaching-course-header">
              <h5 class="teaching-course-name">Geographic Information Retrieval</h5>
              <span class="teaching-term">Winter 2026</span>
            </div>
            <p class="teaching-role">Lead lecturer · with <a href="https://ufind.univie.ac.at/en/person.html?id=1004103">Zilong Liu</a> · Two groups</p>
            <nav class="teaching-links" aria-label="Geographic Information Retrieval course links">
              <a href="https://yingjinghuang.github.io/Geographic-Information-Retrieval/">Course Page ↗</a>
              <a href="https://ufind.univie.ac.at/en/course.html?lv=290753&amp;semester=2026W">u:find · Tuesday group ↗</a>
              <a href="https://ufind.univie.ac.at/en/course.html?lv=290705&amp;semester=2026W">u:find · Friday group ↗</a>
            </nav>
          </article>

          <article class="teaching-course">
            <div class="teaching-course-header">
              <h5 class="teaching-course-name">Conceptual Modelling and Programming</h5>
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
    <h3 class="teaching-year-title" id="teaching-2025">2025</h3>
    <div class="teaching-institution">
      <div class="teaching-logo">
        <img src="{{ '/assets/img/pku_logo.png' | relative_url }}" alt="" loading="lazy">
      </div>
      <div class="teaching-body">
        <h4 class="teaching-institution-name">Peking University</h4>
        <div class="teaching-course-list">
          <article class="teaching-course">
            <div class="teaching-course-header">
              <h5 class="teaching-course-name">Spatial Analysis and GIS Applications</h5>
              <span class="teaching-term">Spring 2025</span>
            </div>
            <p class="teaching-role">Teaching Assistant · with <a href="https://scholar.google.com/citations?user=dc1TzLoAAAAJ">Prof. Fan Zhang</a></p>
          </article>
        </div>
      </div>
    </div>
  </section>

  </section>

  <section class="teaching-supervision-section" aria-labelledby="teaching-supervision-title">
    <h2 class="teaching-section-heading" id="teaching-supervision-title">Student Supervision</h2>
    <article class="teaching-supervision-entry">
      <div class="teaching-logo">
        <img src="{{ '/assets/img/univie_logo.png' | relative_url }}" alt="" loading="lazy">
      </div>
      <div class="teaching-supervision-content">
        <div class="teaching-supervision-header">
          <h3 class="teaching-supervision-name">Seyedeh Negin Kosari</h3>
          <span class="teaching-supervision-date">2026–present</span>
        </div>
        <p class="teaching-supervision-degree">Master's thesis · University of Vienna</p>
        <p class="teaching-supervision-role">Co-supervisor · with <a href="https://ufind.univie.ac.at/de/person.html?id=1001662">Prof. Krzysztof Janowicz</a></p>
      </div>
    </article>
  </section>


</div>
