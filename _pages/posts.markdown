---
layout: default
title: Posts
permalink: /posts/
---

<section class="posts-page">
  <h1>All Posts</h1>
  <p class="section-intro">
    A collection of writings, reflections, and small experiments from my everyday.
  </p>

  <div class="posts-list">
    {% for post in site.posts %}
      <article class="post-card">
        <h2>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <p class="post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
        <p>{{ post.excerpt }}</p>
      </article>
    {% endfor %}
  </div>
</section>
