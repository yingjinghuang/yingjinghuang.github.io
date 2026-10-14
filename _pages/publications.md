---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
hide_missing_publication_previews: true
_styles: |
  .publication-list-page { max-width: 860px; }
  .publication-intro {
    margin: 0 0 .5rem;
    font-size: .97rem;
    line-height: 1.65;
  }
  .publication-legend {
    margin: 0 0 1rem;
    color: var(--global-text-color-light);
    font-size: .85rem;
    line-height: 1.6;
  }
  .publication-legend .corresponding,
  .publication-legend .cofirst { text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
  .publication-legend .corresponding { color: red; }
  .publication-legend .cofirst { color: blue; }
  .publication-list-page .publications { margin-top: 1.35rem; }
  .publication-list-page .publications h2.bibliography {
    margin: 2rem 0 .3rem;
    padding: .65rem 0 .15rem;
    border-top: 1px solid var(--global-divider-color);
    text-align: left;
    font-size: 1.48rem;
    line-height: 1.35;
    font-weight: 650;
    opacity: 1;
    color: var(--global-theme-color);
  }
  .publication-list-page .publications ol.bibliography li {
    margin: 0;
    padding: 1.05rem 0 1.15rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .publication-list-page .publications ol.bibliography li:last-child { border-bottom: 0; }
  .publication-list-page .publications ol.bibliography li .title {
    font-size: 1.035rem;
    font-weight: 650;
    line-height: 1.5;
  }
  .publication-list-page .publications ol.bibliography li .author {
    margin-top: .26rem;
    font-size: .91rem;
    line-height: 1.55;
  }
  .publication-list-page .publications ol.bibliography li .periodical {
    margin-top: .22rem;
    font-size: .88rem;
    line-height: 1.5;
  }
  .publication-list-page .publications ol.bibliography li .abbr abbr {
    padding: .26rem .45rem;
    border-radius: 5px;
    font-size: .72rem;
    font-weight: 600;
    line-height: 1.45;
  }
  .publication-list-page .publications ol.bibliography li img.preview {
    width: 100%;
    max-height: 158px;
    object-fit: contain;
    border-radius: 7px !important;
  }
  .publication-list-page .publications ol.bibliography li .links {
    margin-top: .42rem;
  }
  .publication-list-page .publications ol.bibliography li .links a.btn {
    padding: .19rem .57rem;
    margin: 0 .35rem .3rem 0;
    border-radius: 5px;
    font-size: .78rem;
    line-height: 1.5;
  }
  .patents-section { margin-top: 2.6rem; }
  .patents-heading {
    margin: 0 0 .75rem;
    font-size: 1.45rem;
    font-weight: 650;
    line-height: 1.35;
    letter-spacing: -.02em;
  }
  .patent-list { list-style: none; padding: 0; margin: 0; }
  .patent-entry {
    display: grid;
    grid-template-columns: 76px minmax(0, 1fr);
    gap: 1.1rem;
    padding: 1.2rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .patent-entry:last-child { border-bottom: 0; }
  .patent-year {
    display: block;
    color: var(--global-theme-color);
    font-size: 1rem;
    font-weight: 650;
    line-height: 1.4;
  }
  .patent-status {
    display: block;
    margin-top: .3rem;
    color: var(--global-text-color-light);
    font-size: .76rem;
    line-height: 1.4;
  }
  .patent-body { min-width: 0; overflow-wrap: break-word; }
  .patent-title {
    margin: 0;
    font-size: 1.025rem;
    font-weight: 650;
    line-height: 1.5;
  }
  .patent-authors {
    margin: .35rem 0 0;
    font-size: .91rem;
    line-height: 1.55;
  }
  .patent-reference {
    margin: .25rem 0 0;
    font-size: .87rem;
    color: var(--global-text-color-light);
    line-height: 1.55;
  }
  .patent-link {
    display: inline-block;
    margin-top: .5rem;
    font-size: .87rem;
    line-height: 1.5;
    color: var(--global-theme-color);
  }
  .patent-link:hover { text-decoration: underline; }
  @media (max-width: 600px) {
    .publication-list-page .publications h2.bibliography { font-size: 1.34rem; }
    .publication-list-page .publications ol.bibliography li { padding: .95rem 0 1.05rem; }
    .publication-list-page .publications ol.bibliography li img.preview { max-height: 135px; }
    .patents-section { margin-top: 2rem; }
    .patents-heading { font-size: 1.34rem; }
    .patent-entry { grid-template-columns: 55px minmax(0, 1fr); gap: .7rem; padding: 1rem 0; }
    .patent-year { font-size: .9rem; }
    .patent-status { font-size: .72rem; }
  }
---

<div class="publication-list-page">

  <p class="publication-intro">Publications are listed in reverse chronological order. A complete citation record is available on <a href="https://scholar.google.com/citations?user=csRWjXUAAAAJ">Google Scholar</a>.</p>
  <p class="publication-legend"><span class="corresponding">Red underline</span> denotes corresponding author · <span class="cofirst">Blue underline</span> denotes co-first author.</p>

  {% include bib_search.liquid %}

  <div class="publications">
    {% bibliography %}
  </div>

  <section class="patents-section" aria-labelledby="patents-heading">
    <h2 class="patents-heading" id="patents-heading">Patents</h2>
    <ol class="patent-list">

      <li class="patent-entry">
        <div>
          <span class="patent-year">2025</span>
          <span class="patent-status">Granted</span>
        </div>
        <div class="patent-body">
          <h3 class="patent-title">Method, Device, and Storage Medium for Comprehensive Landscape Representation Based on Street Imagery</h3>
          <p class="patent-authors">Fan Zhang, <strong><u>Yingjing Huang</u></strong>, Yu Liu</p>
          <p class="patent-reference">China Patent ZL202510142438.1 · Granted December 16, 2025</p>
          <a class="patent-link" href="https://patents.google.com/patent/CN119597956A">Patent details ↗</a>
        </div>
      </li>

      <li class="patent-entry">
        <div>
          <span class="patent-year">2023</span>
          <span class="patent-status">Pending</span>
        </div>
        <div class="patent-body">
          <h3 class="patent-title">Image Processing Method, Device, Product, Equipment, and Medium</h3>
          <p class="patent-authors">Fan Zhang, <strong><u>Yingjing Huang</u></strong>, Diansheng Guo</p>
          <p class="patent-reference">China Patent Application CN116977690A · Published October 31, 2023 · Patent Pending</p>
          <a class="patent-link" href="https://patents.google.com/patent/CN116977690A">Patent details ↗</a>
        </div>
      </li>

      <li class="patent-entry">
        <div>
          <span class="patent-year">2023</span>
          <span class="patent-status">Pending</span>
        </div>
        <div class="patent-body">
          <h3 class="patent-title">Method and Related Device for Identifying Regions in Space</h3>
          <p class="patent-authors">Fan Zhang, <strong><u>Yingjing Huang</u></strong>, Diansheng Guo</p>
          <p class="patent-reference">China Patent Application CN116958803A · Published October 27, 2023 · Patent Pending</p>
          <a class="patent-link" href="https://patents.google.com/patent/CN116958803A">Patent details ↗</a>
        </div>
      </li>

    </ol>
  </section>

</div>
