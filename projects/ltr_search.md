---
layout: project
type: project
image: /img/accenture/accenture-logo.svg
title: "Personalized Search with Learning-To-Rank Re-ranking"
date: 2025
published: true
labels:
  - Machine Learning
  - Search & Ranking
  - Learning To Rank
  - Personalization
  - Recommender Systems
  - Python
  - LightGBM
  - Scikit-Learn
summary: "Enhanced an existing search system with a Learning-To-Rank (LTR) model as the re-ranker stage, improving personalization of results."
---
<img class="img-fluid" src="/img/accenture/ltr-search.svg">

## Objective

Improve the relevance and personalization of an existing search product without replacing its first-stage retrieval.

## Approach

- Kept the existing retrieval as the candidate generator (top-N) and added a **second-stage LTR re-ranker**.
- Engineered query, item, and user features (recency, popularity, textual match scores, user history) and trained a gradient-boosted LTR model on click and interaction logs.
- Evaluated offline with NDCG / MRR against the production ranking before online rollout.
