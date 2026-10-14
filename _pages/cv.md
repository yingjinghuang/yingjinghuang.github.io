---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 7
_styles: |
  .cv-download-page { max-width: 760px; padding: 1.7rem 0; }
  .cv-description { margin: 0; font-size: 1.03rem; line-height: 1.65; }
  .cv-meta { margin: .4rem 0 1.35rem; color: var(--global-text-color-light); font-size: .88rem; }
  .cv-actions { display: flex; flex-wrap: wrap; align-items: center; gap: .7rem 1.1rem; }
  .cv-primary-action {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    padding: .6rem .95rem;
    border: 1px solid var(--global-theme-color);
    background: var(--global-theme-color);
    color: var(--global-bg-color) !important;
    border-radius: 7px;
    font-size: .92rem;
    font-weight: 550;
    text-decoration: none;
  }
  .cv-primary-action:hover { opacity: .88; text-decoration: none; }
  .cv-secondary-action { color: var(--global-theme-color); font-size: .9rem; text-decoration: none; }
  .cv-secondary-action:hover { text-decoration: underline; }
  @media (max-width: 600px) { .cv-download-page { padding: .9rem 0; } }
---

<div class="cv-download-page">
  <p class="cv-description">My full academic curriculum vitae is available as a PDF.</p>
  <p class="cv-meta">6 pages · Updated August 2026</p>
  <div class="cv-actions">
    <a class="cv-primary-action" href="{{ '/assets/pdf/YingjingCV.pdf' | relative_url }}" download="Yingjing_Huang_CV.pdf"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> Download CV</a>
    <a class="cv-secondary-action" href="{{ '/assets/pdf/YingjingCV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">View PDF ↗</a>
  </div>
</div>
