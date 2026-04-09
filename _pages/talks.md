---
layout: page
permalink: /talks/
title: talks
description: Invited talks, conference presentations, and seminars.
nav: true
nav_order: 6
---

{% for entry in site.data.talks %}
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
