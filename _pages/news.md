---
layout: page
title: news
permalink: /news/
nav: true
nav_order: 8
_styles: |
  .news-page { max-width: 860px; }
  .news-page .news .table-responsive { overflow-x: visible; }
  .news-page .news table {
    width: 100%;
    margin: 0;
    border-collapse: collapse;
  }
  .news-page .news table tr { border-bottom: 1px solid var(--global-divider-color); }
  .news-page .news table tr:last-child { border-bottom: 0; }
  .news-page .news table th,
  .news-page .news table td {
    vertical-align: top;
    border: 0;
    padding-top: .85rem;
    padding-bottom: .95rem;
    line-height: 1.6;
  }
  .news-page .news table th {
    width: 132px !important;
    max-width: 132px;
    min-width: 132px;
    padding-right: 1.2rem;
    padding-left: 0;
    white-space: nowrap;
    font-size: .84rem;
    font-weight: 500;
    color: var(--global-text-color-light);
  }
  .news-page .news table td {
    padding-right: 0;
    padding-left: 0;
    font-size: .96rem;
    overflow-wrap: anywhere;
  }
  .news-page .news table td a { color: var(--global-theme-color); }
  .news-page .news table td a:hover { text-decoration: underline; }
  @media (max-width: 600px) {
    .news-page .news table,
    .news-page .news table tbody,
    .news-page .news table tr,
    .news-page .news table th,
    .news-page .news table td { display: block; }
    .news-page .news table tr { padding: .85rem 0 1rem; }
    .news-page .news table th {
      width: auto !important;
      max-width: none;
      min-width: 0;
      padding: 0 0 .2rem;
      font-size: .82rem;
    }
    .news-page .news table td { padding: 0; font-size: .94rem; }
  }
---

<div class="news-page">
  {% include news.liquid %}
</div>
