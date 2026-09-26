---
layout: project
type: project
image: /img/accenture/accenture-logo.svg
title: "AI Ops Workflow for Log Monitoring & Trend Analysis"
date: 2025
published: true
labels:
  - AI Ops
  - Anomaly Detection
  - Time Series
  - Large Language Model
  - Observability
  - Python
summary: "Designed and developed an AI Ops workflow that ingests product and system logs, detects anomalies and trends, and summarizes findings with an LLM."
---
<img class="img-fluid" src="/img/accenture/ai-ops.svg">

## Objective

Reduce the manual effort of watching logs across several products and systems by turning raw logs into ranked, explained alerts and a daily trend digest.

## Approach

- Ingest and parse heterogeneous logs and metrics into a common schema.
- Statistical and ML-based **anomaly and trend detection** over error rates, latency, and volume per component.
- An **LLM summarization** step groups related anomalies, proposes root-cause hints, and writes the human-readable digest sent to the operations channel and dashboard.
