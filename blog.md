---
layout: default
title: Blog
---

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Blog Posts</h1>

            <div id="post-list">
            	{% for post in paginator.posts %}
                    A post!
            		<div>
            			<span class="post-date">{{ post.date | date_to_long_string }}</span>
            			<h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
            			<p class="post-description">{{ post.content | strip_html | truncatewords: 50 }}</p>
            		</div>
            		<br>
            	{% endfor %}
            </div>

            <nav class="pagination" role="navigation">
            	{% if paginator.next_page %}
            		<a class="newer-posts" href="/page{{paginator.next_page}}">&larr; Older posts</a>
            	{% endif %}
            	<span class="page-number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
            	{% if paginator.previous_page %}
            		{% if paginator.page == 2 %}
            			<a class="older-posts" href="/">Newer posts &rarr;</a>
            		{% else %}
            			<a class="older-posts" href="/page{{paginator.previous_page}}">Newer posts &rarr;</a>
            		{% endif %}
            	{% endif %}
            </nav>
        </div>
    </div>
</div>
