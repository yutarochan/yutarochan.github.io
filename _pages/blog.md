---
layout: page
title: Blog
permalink: /blog/
---

<div class="posts-grid">
  {% for post in site.posts %}
  <a href="{{ post.url | relative_url }}" class="post-card animate-on-scroll">
    <div class="post-card-content">
      <p class="post-card-date">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h3 class="post-card-title">{{ post.title }}</h3>
      <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    </div>
  </a>
  {% endfor %}
</div>