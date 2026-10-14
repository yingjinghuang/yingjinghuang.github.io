---
layout: page
permalink: /talks/
title: talks
description: Invited talks, conference presentations, and seminars.
nav: true
nav_order: 5
_styles: |
  .talks-page { max-width: 860px; }
  .talks-section + .talks-section { margin-top: 2.5rem; }
  .talks-heading {
    margin: 0 0 .65rem;
    font-size: 1.45rem;
    font-weight: 650;
    line-height: 1.35;
    letter-spacing: -.02em;
  }
  .talks-entry {
    padding: 1.2rem 0 1.25rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .talks-entry:last-child { border-bottom: 0; }
  .talks-entry-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: .3rem 1.1rem;
  }
  .talks-entry-title {
    margin: 0;
    font-size: 1.06rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -.01em;
    min-width: 0;
    overflow-wrap: break-word;
  }
  .talks-date {
    flex-shrink: 0;
    color: var(--global-text-color-light);
    font-size: .84rem;
    white-space: nowrap;
  }
  .talks-venue {
    margin: .38rem 0 0;
    font-size: .94rem;
    line-height: 1.5;
  }
  .talks-location,
  .talks-kind {
    margin: .2rem 0 0;
    font-size: .86rem;
    line-height: 1.55;
    color: var(--global-text-color-light);
  }
  .talks-location i { margin-right: .2rem; font-size: .8rem; }
  .talks-kind { font-style: italic; }
  .talks-links {
    display: flex;
    flex-wrap: wrap;
    gap: .35rem 1.15rem;
    margin-top: .5rem;
    font-size: .88rem;
    line-height: 1.5;
  }
  .talks-links a { color: var(--global-theme-color); }
  .talks-links a:hover { text-decoration: underline; }
  .talks-links i { margin-right: .2rem; }
  @media (max-width: 600px) {
    .talks-section + .talks-section { margin-top: 2rem; }
    .talks-heading { font-size: 1.34rem; }
    .talks-entry { padding: 1.05rem 0; }
    .talks-entry-header {
      flex-direction: column;
      align-items: flex-start;
      gap: .25rem;
    }
    .talks-date { font-size: .81rem; white-space: normal; }
  }
---

{% assign invited_group = site.data.talks | where: "title", "Invited Talks" | first %}
{% assign conference_group = site.data.talks | where: "title", "Conference Talks" | first %}
{% assign poster_group = site.data.talks | where: "title", "Conference Posters" | first %}
{% assign invited_items = invited_group.contents | sort: "sort_month" | reverse %}
{% assign conference_items = conference_group.contents | concat: poster_group.contents | sort: "sort_month" | reverse %}

<div class="talks-page">
  {% for section_id in (1..2) %}
    {% if section_id == 1 %}
      {% assign section_title = "Invited Talks" %}
      {% assign section_items = invited_items %}
    {% else %}
      {% assign section_title = "Conference Presentations" %}
      {% assign section_items = conference_items %}
    {% endif %}
    <section class="talks-section" aria-labelledby="talks-heading-{{ section_id }}">
      <h2 class="talks-heading" id="talks-heading-{{ section_id }}">{{ section_title }}</h2>
      {% for talk in section_items %}
        <article class="talks-entry">
          <div class="talks-entry-header">
            <h3 class="talks-entry-title">{{ talk.title | escape }}</h3>
            <span class="talks-date">{{ talk.description | first }}</span>
          </div>
          <p class="talks-venue">{{ talk.institution | escape }}</p>
          <p class="talks-location"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> {{ talk.location | escape }}</p>
          {% if section_id == 2 %}
            <p class="talks-kind">{% if talk.presentation_type == 'Poster' %}Poster presentation{% else %}Conference talk{% endif %}</p>
          {% endif %}
          {% if talk.linkitems %}
            <div class="talks-links">
              {% for material in talk.linkitems %}
                <a href="{{ material.link | escape }}">{% if material.linkname contains 'Video' %}<i class="fa-solid fa-video" aria-hidden="true"></i> Watch recording (Chinese) ↗{% elsif material.linkname contains 'Poster' %}<i class="fa-solid fa-file-pdf" aria-hidden="true"></i> View poster (PDF) ↗{% else %}{{ material.linkname | escape }} ↗{% endif %}</a>
              {% endfor %}
            </div>
          {% endif %}
        </article>
      {% endfor %}
    </section>
  {% endfor %}
</div>
