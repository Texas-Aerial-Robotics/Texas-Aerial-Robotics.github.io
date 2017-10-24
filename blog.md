---
layout: default
title: Blog
permalink: /blog/
---

<ul id="post_container">
{% for post in site.posts %}
  <li>
    <div class="header">
    <h2>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </h2>
    <p class="date">{{ post.date | date: "%B %e, %Y" }} • {{ post.author }}</p>
    </div>
    <div class="content">
    {{ post.content }}
    </div>
  </li>
{% endfor %}
</ul>
