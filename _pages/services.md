---
layout: page
permalink: /services/
title: services
description: Editorial work, workshop organization, and journal reviewing.
nav: true
nav_order: 6
_styles: |
  .services-page { max-width: 860px; }
  .service-section + .service-section { margin-top: 2.6rem; }
  .service-heading {
    margin: 0 0 .65rem;
    font-size: 1.45rem;
    font-weight: 650;
    line-height: 1.35;
    letter-spacing: -.02em;
  }
  .service-entry {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    align-items: start;
    gap: .9rem;
    padding: 1.2rem 0 1.3rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .service-entry:last-child { border-bottom: 0; }
  .service-entry-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    color: var(--global-theme-color);
    font-size: 1.03rem;
  }
  .service-entry-content { min-width: 0; overflow-wrap: break-word; }
  .service-entry-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: .35rem 1rem;
  }
  .service-role {
    font-size: 1.08rem;
    line-height: 1.45;
    font-weight: 650;
    margin: 0;
    letter-spacing: -.01em;
  }
  .service-date {
    font-size: .83rem;
    white-space: nowrap;
    color: var(--global-text-color-light);
  }
  .service-title {
    margin: .4rem 0 0;
    font-size: .97rem;
    line-height: 1.55;
    font-weight: 550;
  }
  .service-meta {
    margin: .2rem 0 0;
    font-size: .87rem;
    line-height: 1.55;
    color: var(--global-text-color-light);
  }
  .service-links { margin: .5rem 0 0; font-size: .88rem; line-height: 1.5; }
  .service-links a { color: var(--global-theme-color); text-decoration: none; }
  .service-links a:hover { text-decoration: underline; }
  .service-links i { margin-left: .2rem; font-size: .75rem; }
  .service-review-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: .5rem 1rem;
    margin-bottom: .85rem;
  }
  .service-review-head .service-heading { margin: 0; }
  .service-review-count { font-size: .83rem; color: var(--global-text-color-light); white-space: nowrap; }
  .service-review-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2.2rem;
    row-gap: 0;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .service-review-list li {
    position: relative;
    min-width: 0;
    padding: .66rem 0 .66rem .9rem;
    line-height: 1.55;
    font-size: .9rem;
    overflow-wrap: break-word;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .service-review-list li::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    left: 0;
    top: 1.29rem;
    border-radius: 50%;
    background: var(--global-theme-color);
    opacity: .6;
  }
  .service-review-list a { color: var(--global-text-color); text-decoration: none; }
  .service-review-list a:hover { color: var(--global-theme-color); text-decoration: underline; }
  @media (max-width: 680px) {
    .service-section + .service-section { margin-top: 2.05rem; }
    .service-heading { font-size: 1.34rem; }
    .service-entry { padding: 1rem 0 1.15rem; grid-template-columns: 38px minmax(0, 1fr); gap: .75rem; }
    .service-entry-icon { width: 38px; height: 38px; border-radius: 9px; }
    .service-entry-top { align-items: flex-start; flex-direction: column; gap: .18rem; }
    .service-date { white-space: normal; }
    .service-review-list { grid-template-columns: minmax(0, 1fr); }
    .service-review-list li { padding-top: .6rem; padding-bottom: .6rem; }
    .service-review-list li::before { top: 1.23rem; }
  }
---

{% assign editorial_group = site.data.services | where: "title", "Editorial Roles" | first %}
{% assign workshop_group = site.data.services | where: "title", "Conference & Workshop Organization" | first %}
{% assign reviewing_group = site.data.services | where: "title", "Journal Reviewing" | first %}

<div class="services-page">

  <section class="service-section" aria-labelledby="service-editorial-heading">
    <h2 class="service-heading" id="service-editorial-heading">Editorial Roles</h2>
    {% for entry in editorial_group.entries %}
      <article class="service-entry">
        <div class="service-entry-icon" aria-hidden="true"><i class="fa-solid fa-pen-to-square"></i></div>
        <div class="service-entry-content">
          <div class="service-entry-top">
            <h3 class="service-role">{{ entry.role | escape }}</h3>
            <span class="service-date">{{ entry.year | escape }}</span>
          </div>
          <p class="service-title">{{ entry.title | escape }}</p>
          <p class="service-meta">{{ entry.venue | escape }}</p>
          {% if entry.url %}
            <p class="service-links"><a href="{{ entry.url | escape }}">Special issue <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></p>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </section>

  <section class="service-section" aria-labelledby="service-workshop-heading">
    <h2 class="service-heading" id="service-workshop-heading">Conference &amp; Workshop Organization</h2>
    {% for entry in workshop_group.entries %}
      <article class="service-entry">
        <div class="service-entry-icon" aria-hidden="true"><i class="fa-solid fa-users"></i></div>
        <div class="service-entry-content">
          <div class="service-entry-top">
            <h3 class="service-role">{{ entry.role | escape }}</h3>
            <span class="service-date">{{ entry.date | escape }}</span>
          </div>
          <p class="service-title">{{ entry.title | escape }}</p>
          <p class="service-meta">{{ entry.venue | escape }}{% if entry.location %} · {{ entry.location | escape }}{% endif %}</p>
          {% if entry.url %}
            <p class="service-links"><a href="{{ entry.url | escape }}">Workshop website <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></p>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </section>

  <section class="service-section" aria-labelledby="service-review-heading">
    <div class="service-review-head">
      <h2 class="service-heading" id="service-review-heading">Journal Reviewing</h2>
      <span class="service-review-count">{{ reviewing_group.journals.size }} journals</span>
    </div>
    <ul class="service-review-list">
      {% for journal in reviewing_group.journals %}
        <li>{% if journal.url %}<a href="{{ journal.url | escape }}">{{ journal.name | escape }}</a>{% else %}{{ journal.name | escape }}{% endif %}</li>
      {% endfor %}
    </ul>
  </section>

</div>
