---
layout: page
title: My Work
permalink: /works/
---

<div class="works-grid">
  {% assign sorted_works = site.works | sort: "date" | reverse %}
  {% for work in sorted_works %}
  <a href="{{ work.url | relative_url }}" class="work-card animate-on-scroll">
    {% if work.featured_image %}
    <div class="work-card-image">
      <img src="{{ work.featured_image | relative_url }}" alt="{{ work.title }}">
    </div>
    {% endif %}
    <div class="work-card-content">
      <h3 class="work-card-title">{{ work.title }}</h3>
      <p class="work-card-category">{{ work.category }}</p>
    </div>
  </a>
  {% endfor %}
</div>