---
layout: page
permalink: /services/
title: services
description: Editorial work, workshop organization, and journal reviewing.
nav: true
nav_order: 6
_styles: |
  .services-page { max-width: 860px; }
  .services-highlights {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.1rem;
  }
  .service-panel {
    position: relative;
    min-width: 0;
    display: flex;
    flex-direction: column;
    padding: 1.4rem 1.45rem 1.35rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 11px;
    background: var(--global-card-bg-color);
  }
  .service-panel::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 1.4rem;
    right: 1.4rem;
    height: 3px;
    background: var(--global-theme-color);
    border-radius: 0 0 3px 3px;
  }
  .service-panel-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .75rem;
    margin: .15rem 0 1.05rem;
  }
  .service-panel-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    color: var(--global-theme-color);
    border-radius: 9px;
    font-size: 1.03rem;
  }
  .service-panel-year {
    color: var(--global-text-color-light);
    font-size: .82rem;
  }
  .service-panel-kind {
    margin: 0 0 .3rem;
    color: var(--global-text-color-light);
    font-weight: 650;
    text-transform: uppercase;
    letter-spacing: .075em;
    font-size: .71rem;
    line-height: 1.5;
  }
  .service-panel-role {
    margin: 0;
    font-size: 1.23rem;
    line-height: 1.4;
    letter-spacing: -.016em;
    font-weight: 650;
  }
  .service-panel-title {
    margin: .85rem 0 0;
    font-size: .99rem;
    line-height: 1.6;
    font-weight: 550;
    overflow-wrap: break-word;
  }
  .service-panel-venue {
    margin: .45rem 0 0;
    font-size: .87rem;
    line-height: 1.55;
    color: var(--global-text-color-light);
  }
  .service-panel-footer {
    margin: auto 0 0;
    padding-top: 1rem;
    font-size: .88rem;
  }
  .service-panel-footer a {
    display: inline-flex;
    align-items: center;
    gap: .35rem;
    color: var(--global-theme-color);
    text-decoration: none;
  }
  .service-panel-footer a:hover { text-decoration: underline; }
  .service-review-section { margin-top: 2.7rem; }
  .service-review-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .service-review-head h2 {
    margin: 0 0 .35rem;
    font-size: 1.45rem;
    font-weight: 650;
    line-height: 1.35;
    letter-spacing: -.02em;
  }
  .service-review-subtitle {
    margin: 0;
    font-size: .88rem;
    line-height: 1.5;
    color: var(--global-text-color-light);
  }
  .service-review-metric {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 82px;
    padding: .55rem 1rem;
    border-radius: 9px;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
  }
  .service-review-number {
    font-size: 1.8rem;
    line-height: 1.2;
    font-weight: 650;
    color: var(--global-theme-color);
  }
  .service-review-unit {
    font-size: .75rem;
    color: var(--global-text-color-light);
    margin-top: .1rem;
  }
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
    position: absolute;
    content: "";
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
  @media (max-width: 720px) {
    .services-highlights { grid-template-columns: minmax(0, 1fr); gap: .85rem; }
    .service-panel { padding: 1.2rem 1.25rem; }
    .service-review-section { margin-top: 2.15rem; }
    .service-review-head h2 { font-size: 1.34rem; }
    .service-review-list { grid-template-columns: minmax(0, 1fr); }
    .service-review-list li { padding-top: .6rem; padding-bottom: .6rem; }
    .service-review-list li::before { top: 1.23rem; }
  }
  @media (max-width: 380px) {
    .service-review-metric { min-width: 65px; padding: .4rem .6rem; }
    .service-review-number { font-size: 1.48rem; }
  }
---

{% assign editorial_group = site.data.services | where: "title", "Editorial Roles" | first %}
{% assign workshop_group = site.data.services | where: "title", "Conference & Workshop Organization" | first %}
{% assign reviewing_group = site.data.services | where: "title", "Journal Reviewing" | first %}

<div class="services-page">

  <div class="services-highlights">
    {% for entry in editorial_group.entries %}
      <section class="service-panel" aria-labelledby="service-editorial-heading">
        <div class="service-panel-top">
          <div class="service-panel-icon" aria-hidden="true"><i class="fa-solid fa-pen-to-square"></i></div>
          <span class="service-panel-year">{{ entry.year | escape }}</span>
        </div>
        <p class="service-panel-kind">Editorial Roles</p>
        <h2 class="service-panel-role" id="service-editorial-heading">{{ entry.role | escape }}</h2>
        <p class="service-panel-title">{{ entry.title | escape }}</p>
        <p class="service-panel-venue">{{ entry.venue | escape }}</p>
        {% if entry.url %}
          <p class="service-panel-footer"><a href="{{ entry.url | escape }}">Special issue <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></p>
        {% endif %}
      </section>
    {% endfor %}

    {% for entry in workshop_group.entries %}
      <section class="service-panel" aria-labelledby="service-workshop-heading">
        <div class="service-panel-top">
          <div class="service-panel-icon" aria-hidden="true"><i class="fa-solid fa-users"></i></div>
          <span class="service-panel-year">{{ entry.date | escape }}</span>
        </div>
        <p class="service-panel-kind">Conference &amp; Workshop Organization</p>
        <h2 class="service-panel-role" id="service-workshop-heading">{{ entry.role | escape }}</h2>
        <p class="service-panel-title">{{ entry.title | escape }}</p>
        <p class="service-panel-venue">{{ entry.venue | escape }}{% if entry.location %} · {{ entry.location | escape }}{% endif %}</p>
        {% if entry.url %}
          <p class="service-panel-footer"><a href="{{ entry.url | escape }}">Workshop website <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></p>
        {% endif %}
      </section>
    {% endfor %}
  </div>

  <section class="service-review-section" aria-labelledby="service-review-heading">
    <div class="service-review-head">
      <div>
        <h2 id="service-review-heading">Journal Reviewing</h2>
        <p class="service-review-subtitle">Peer-review service for academic journals</p>
      </div>
      <div class="service-review-metric" aria-label="{{ reviewing_group.journals.size }} journals">
        <strong class="service-review-number">{{ reviewing_group.journals.size }}</strong>
        <span class="service-review-unit">journals</span>
      </div>
    </div>

    <ul class="service-review-list">
      {% for journal in reviewing_group.journals %}
        <li>{% if journal.url %}<a href="{{ journal.url | escape }}">{{ journal.name | escape }}</a>{% else %}{{ journal.name | escape }}{% endif %}</li>
      {% endfor %}
    </ul>
  </section>

</div>
