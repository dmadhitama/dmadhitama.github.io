---
layout: project
type: side-project
image: /img/personal/platewatch_logo.png
title: "PlateWatch — Crowdsourced Traffic Violation Reporting"
date: 2025
published: true
labels:
  - Side Project
  - Full-Stack
  - Next.js
  - TypeScript
  - Supabase
  - PWA
  - AWS Lambda
  - Flutter
  - Civic Tech
summary: "Progressive web app for documenting traffic violations in Indonesia: upload photos/videos or import Instagram/YouTube posts, tag license plates, search a plate's history, and moderate reports via an admin dashboard."
---
<img class="img-fluid" src="/img/personal/platewatch.svg">

## Overview

[PlateWatch](https://github.com/dmadhitama/plate-watch) is a community platform where people report and look up traffic violations by license plate.

## Highlights

- Report flow with photo/video upload and license-plate tagging; **Instagram and YouTube import** via serverless downloader functions on AWS Lambda while preserving the original source.
- **License plate search** returning a plate's violation history.
- Community features (like, comment, flag) and a **manual moderation queue** with an admin dashboard.
- Supabase Postgres + Auth, Next.js 14 App Router PWA, Nginx/Docker deployment on a VPS, CloudFront/WAF hardening notes, and a Flutter mobile companion in progress.
- Roadmap: AI-assisted plate recognition and premium tiers.
