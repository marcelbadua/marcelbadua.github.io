---
layout: default
permalink: /tags/
---

<section class="tags-page">
  <h1>Tags</h1>
  <p class="section-intro">Browse content by topic. Words, images, and experiments organized by themes.</p>

  <div class="tags-list">
    {% for tag in site.tags %}
      <div class="tag-card">
        <a href="{{ '/tags/' | append: tag[0] | relative_url }}">
          {{ tag[0] }} ({{ tag[1].size }})
        </a>
      </div>
    {% endfor %}
  </div>
</section>
