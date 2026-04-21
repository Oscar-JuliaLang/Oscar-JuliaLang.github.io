---
layout: page
title: Lecture notes
---

These are session-style notes and mini “lecture notes” written collaboratively.

- [2026-01-01 — Welcome & goals](2026-01-01-welcome-and-goals)
- [Session 1 — Introduction to OSCAR and Julia](Session1)

{% assign notes = site.pages | where_exp: "p", "p.path contains 'notes/Sessions/'" | sort: "date" | reverse %}
{% for item in notes %}
- *{{ item.date | date: "%B %-d, %Y" }}*, [{{ item.title }}]({{ item.url }}), {{ item.speaker }}
{% endfor %}

