---
layout: page
permalink: /services/
title: services
description: Academic services including journal reviews, conference organization, and committee memberships.
nav: true
nav_order: 5
---

{% for entry in site.data.services %}
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
