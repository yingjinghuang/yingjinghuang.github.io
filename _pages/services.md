---
layout: page
permalink: /services/
title: services
description: Editorial work, workshop organization, and journal reviewing.
nav: true
nav_order: 6
_styles: |
  .services-page { max-width: 860px; }
  .service-section + .service-section { margin-top: 2.5rem; }
  .service-heading {
    margin: 0 0 .65rem;
    font-size: 1.45rem;
    font-weight: 650;
    line-height: 1.35;
    letter-spacing: -.02em;
  }
  .service-entry {
    padding: 1.18rem 0 1.3rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .service-entry:last-child { border-bottom: 0; }
  .service-entry-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: .3rem 1.1rem;
  }
  .service-entry-role {
    margin: 0;
    font-size: 1.08rem;
    font-weight: 650;
    line-height: 1.45;
  }
  .service-date {
    flex-shrink: 0;
    color: var(--global-text-color-light);
    font-size: .84rem;
    white-space: nowrap;
  }
  .service-entry-title {
    margin: .38rem 0 0;
    font-size: .98rem;
    line-height: 1.55;
    font-weight: 550;
  }
  .service-entry-meta {
    margin: .2rem 0 0;
    color: var(--global-text-color-light);
    font-size: .89rem;
    line-height: 1.55;
  }
  .service-entry-links {
    margin: .45rem 0 0;
    font-size: .88rem;
    line-height: 1.5;
  }
  .service-entry-links a { color: var(--global-theme-color); }
  .service-entry-links a:hover { text-decoration: underline; }
  .service-review-count {
    font-size: .85rem;
    font-weight: 400;
    color: var(--global-text-color-light);
    margin-left: .45rem;
  }
  .service-review-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2.25rem;
    row-gap: .85rem;
    list-style: none;
    margin: 1.2rem 0 0;
    padding: 0;
  }
  .service-review-list li {
    min-width: 0;
    font-size: .91rem;
    line-height: 1.55;
    overflow-wrap: break-word;
  }
  .service-review-list a { color: var(--global-text-color); }
  .service-review-list a:hover {
    color: var(--global-theme-color);
    text-decoration: underline;
  }
  @media (max-width: 680px) {
    .service-section + .service-section { margin-top: 2rem; }
    .service-heading { font-size: 1.34rem; }
    .service-entry { padding: 1.05rem 0; }
    .service-entry-header {
      flex-direction: column;
      align-items: flex-start;
      gap: .18rem;
    }
    .service-date { font-size: .81rem; white-space: normal; }
    .service-review-list {
      grid-template-columns: minmax(0, 1fr);
      margin-top: .95rem;
      row-gap: .7rem;
    }
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
        <div class="service-entry-header">
          <h3 class="service-entry-role">{{ entry.role | escape }}</h3>
          <span class="service-date">{{ entry.year | default: entry.date | escape }}</span>
        </div>
        <p class="service-entry-title">{{ entry.title | escape }}</p>
        <p class="service-entry-meta">{{ entry.venue | escape }}</p>
        {% if entry.url %}
          <p class="service-entry-links"><a href="{{ entry.url | escape }}">Special Issue ↗</a></p>
        {% endif %}
      </article>
    {% endfor %}
  </section>

  <section class="service-section" aria-labelledby="service-workshop-heading">
    <h2 class="service-heading" id="service-workshop-heading">Conference &amp; Workshop Organization</h2>
    {% for entry in workshop_group.entries %}
      <article class="service-entry">
        <div class="service-entry-header">
          <h3 class="service-entry-role">{{ entry.role | escape }}</h3>
          <span class="service-date">{{ entry.date | escape }}</span>
        </div>
        <p class="service-entry-title">{{ entry.title | escape }}</p>
        <p class="service-entry-meta">{{ entry.venue | escape }}{% if entry.location %} · {{ entry.location | escape }}{% endif %}</p>
        {% if entry.url %}
          <p class="service-entry-links"><a href="{{ entry.url | escape }}">Workshop Website ↗</a></p>
        {% endif %}
      </article>
    {% endfor %}
  </section>

  <section class="service-section" aria-labelledby="service-reviewing-heading">
    <h2 class="service-heading" id="service-reviewing-heading">Journal Reviewing <span class="service-review-count">{{ reviewing_group.journals.size }} journals</span></h2>
    <ul class="service-review-list">
      {% for journal in reviewing_group.journals %}
        <li>{% if journal.url %}<a href="{{ journal.url | escape }}">{{ journal.name | escape }}</a>{% else %}{{ journal.name | escape }}{% endif %}</li>
      {% endfor %}
    </ul>
  </section>

</div>
