---
layout: page
permalink: /teaching/
title: teaching
description: Courses I have taught or assisted with.
nav: true
nav_order: 3
---

{% for entry in site.data.teaching %}
  <a id="{{ entry.title }}" style="scroll-margin-top: 74px"></a>
  <div class="card mt-3 p-3">
    <div class="row">
      <div class="col">
        <h3 class="font-weight-bold">{{ entry.title }}</h3>
      </div>
    </div>
    {% include cv/{{ entry.type }}.liquid %}
  </div>
{% endfor %}
