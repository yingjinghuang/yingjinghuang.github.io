---
layout: page
permalink: /talks/
title: talks
description: Invited talks, conference presentations, and seminars.
nav: true
nav_order: 5
_styles: |
  .talks-page { max-width: 860px; }
  .talks-section + .talks-section { margin-top: 2.7rem; }
  .talks-section-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .talks-section-head h2 {
    margin: 0;
    font-size: 1.45rem;
    line-height: 1.35;
    font-weight: 650;
    letter-spacing: -.02em;
  }
  .talks-section-count {
    font-size: .82rem;
    white-space: nowrap;
    color: var(--global-text-color-light);
  }
  .talks-feature-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  .talks-feature {
    min-width: 0;
    display: flex;
    flex-direction: column;
    padding: 1.2rem 1.25rem 1.25rem;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-top: 3px solid var(--global-theme-color);
    border-radius: 10px;
  }
  .talks-feature-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .6rem;
    margin-bottom: .85rem;
  }
  .talks-eyebrow {
    color: var(--global-theme-color);
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .talks-feature-date,
  .talks-entry-date {
    color: var(--global-text-color-light);
    font-size: .82rem;
    white-space: nowrap;
  }
  .talks-feature h3 {
    font-size: 1.08rem;
    line-height: 1.5;
    font-weight: 650;
    letter-spacing: -.01em;
    margin: 0 0 1.1rem;
  }
  .talks-feature-bottom { margin-top: auto; }
  .talks-feature-host {
    font-size: .91rem;
    font-weight: 550;
    line-height: 1.55;
    margin: 0;
  }
  .talks-feature-location {
    color: var(--global-text-color-light);
    font-size: .84rem;
    line-height: 1.55;
    margin: .15rem 0 0;
  }
  .talks-feature-location i { margin-right: .25rem; }
  .talks-recordings { margin-top: .45rem; }
  .talks-recording {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    align-items: start;
    gap: .85rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .talks-recording:last-child { border-bottom: 0; }
  .talks-recording-symbol {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    color: var(--global-theme-color);
    background: var(--global-card-bg-color);
    font-size: 1.05rem;
  }
  .talks-entry-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: .35rem 1rem;
  }
  .talks-entry-head h3 {
    margin: 0;
    font-size: 1.02rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -.01em;
    min-width: 0;
    overflow-wrap: break-word;
  }
  .talks-venue {
    font-size: .9rem;
    line-height: 1.55;
    margin: .32rem 0 0;
  }
  .talks-place {
    color: var(--global-text-color-light);
    font-size: .84rem;
    line-height: 1.5;
    margin: .15rem 0 0;
  }
  .talks-materials { margin: .65rem 0 0; }
  .talks-material-link {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    padding: .38rem .65rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 7px;
    background: var(--global-card-bg-color);
    color: var(--global-theme-color);
    font-size: .84rem;
    line-height: 1.4;
    text-decoration: none;
  }
  .talks-material-link:hover {
    color: var(--global-theme-color);
    border-color: var(--global-theme-color);
    text-decoration: none;
  }
  .talks-conference-list { margin-top: .25rem; }
  .talks-conference {
    display: grid;
    grid-template-columns: 69px minmax(0, 1fr);
    gap: 1.25rem;
    padding: 1.25rem 0 1.3rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .talks-conference:last-child { border-bottom: 0; }
  .talks-conf-date {
    padding-top: .15rem;
    display: flex;
    flex-direction: column;
    line-height: 1.25;
  }
  .talks-conf-month {
    font-size: .81rem;
    font-weight: 650;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: var(--global-theme-color);
  }
  .talks-conf-year {
    margin-top: .2rem;
    color: var(--global-text-color-light);
    font-size: 1rem;
  }
  .talks-type {
    display: inline-flex;
    align-items: center;
    gap: .35rem;
    color: var(--global-text-color-light);
    font-size: .75rem;
    font-weight: 650;
    letter-spacing: .04em;
    text-transform: uppercase;
    margin: 0 0 .45rem;
  }
  .talks-type i { color: var(--global-theme-color); }
  @media (max-width: 640px) {
    .talks-section + .talks-section { margin-top: 2.25rem; }
    .talks-section-head h2 { font-size: 1.34rem; }
    .talks-feature-grid { grid-template-columns: minmax(0, 1fr); gap: .8rem; }
    .talks-feature { padding: 1rem 1.1rem 1.1rem; }
    .talks-feature h3 { margin-bottom: .8rem; }
    .talks-entry-head { align-items: flex-start; flex-direction: column; gap: .2rem; }
    .talks-recording { gap: .7rem; padding: 1rem 0; }
    .talks-conference { grid-template-columns: 52px minmax(0, 1fr); gap: .75rem; padding: 1.1rem 0; }
    .talks-conf-year { font-size: .9rem; }
  }
---

{% assign invited_group = site.data.talks | where: "title", "Invited Talks" | first %}
{% assign conference_group = site.data.talks | where: "title", "Conference Talks" | first %}
{% assign poster_group = site.data.talks | where: "title", "Conference Posters" | first %}
{% assign invited_items = invited_group.contents | sort: "sort_month" | reverse %}
{% assign featured_invited = invited_items | slice: 0, 2 %}
{% assign recorded_invited = invited_items | slice: 2, 100 %}
{% assign conference_items = conference_group.contents | concat: poster_group.contents | sort: "sort_month" | reverse %}

<div class="talks-page">

  <section class="talks-section" aria-labelledby="talks-invited">
    <div class="talks-section-head">
      <h2 id="talks-invited">Invited Talks</h2>
      <span class="talks-section-count">{{ invited_items.size }} talks</span>
    </div>

    <div class="talks-feature-grid">
      {% for talk in featured_invited %}
        <article class="talks-feature">
          <div class="talks-feature-top">
            <span class="talks-eyebrow"><i class="fa-solid fa-microphone" aria-hidden="true"></i> Invited talk</span>
            <time class="talks-feature-date">{{ talk.description | first }}</time>
          </div>
          <h3>{{ talk.title | escape }}</h3>
          <div class="talks-feature-bottom">
            <p class="talks-feature-host">{{ talk.institution | escape }}</p>
            <p class="talks-feature-location"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> {{ talk.location | escape }}</p>
          </div>
        </article>
      {% endfor %}
    </div>

    <div class="talks-recordings">
      {% for talk in recorded_invited %}
        <article class="talks-recording">
          <div class="talks-recording-symbol" aria-hidden="true"><i class="fa-solid fa-video"></i></div>
          <div>
            <div class="talks-entry-head">
              <h3>{{ talk.title | escape }}</h3>
              <span class="talks-entry-date">{{ talk.description | first }}</span>
            </div>
            <p class="talks-venue">{{ talk.institution | escape }}</p>
            <p class="talks-place">{{ talk.location | escape }}</p>
            {% if talk.linkitems %}
              <div class="talks-materials">
                {% for material in talk.linkitems %}
                  <a class="talks-material-link" href="{{ material.link | escape }}"><i class="fa-solid fa-circle-play" aria-hidden="true"></i> {{ material.linkname | escape }} ↗</a>
                {% endfor %}
              </div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="talks-section" aria-labelledby="talks-conferences">
    <div class="talks-section-head">
      <h2 id="talks-conferences">Conference Presentations</h2>
      <span class="talks-section-count">{{ conference_items.size }} presentations</span>
    </div>

    <div class="talks-conference-list">
      {% for talk in conference_items %}
        {% assign display_date = talk.description | first | split: " " %}
        <article class="talks-conference">
          <div class="talks-conf-date" aria-label="{{ talk.description | first }}">
            <span class="talks-conf-month">{{ display_date[0] | remove: "." }}</span>
            <span class="talks-conf-year">{{ display_date[1] }}</span>
          </div>
          <div>
            <p class="talks-type">
              {% if talk.presentation_type == 'Poster' %}
                <i class="fa-solid fa-file-lines" aria-hidden="true"></i> Poster
              {% else %}
                <i class="fa-solid fa-chalkboard" aria-hidden="true"></i> Conference talk
              {% endif %}
            </p>
            <div class="talks-entry-head"><h3>{{ talk.title | escape }}</h3></div>
            <p class="talks-venue">{{ talk.institution | escape }}</p>
            <p class="talks-place">{{ talk.location | escape }}</p>
            {% if talk.linkitems %}
              <div class="talks-materials">
                {% for material in talk.linkitems %}
                  <a class="talks-material-link" href="{{ material.link | escape }}"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> {{ material.linkname | escape }} ↗</a>
                {% endfor %}
              </div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

</div>
