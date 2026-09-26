---
layout: project
type: side-project
image: /img/personal/lensaham_logo.png
title: "Lensaham — Intelligent Trading Analysis Platform"
date: 2026
published: true
labels:
  - Side Project
  - Full-Stack
  - Next.js
  - TypeScript
  - Supabase
  - Technical Analysis
  - Sentiment Analysis
  - Large Language Model
  - Forecasting
  - AWS Lambda
summary: "Web app for Indonesian and global equities combining 10+ technical indicators, news sentiment, MSCI cap classification, a Prophet forecast service on AWS Lambda, and an AI multi-factor trading signal."
---
<img class="img-fluid" src="/img/personal/lensaham.svg">

## Overview

[Lensaham](https://github.com/dmadhitama/lensaham) helps retail traders, with an emphasis on IDX (Bursa Efek Indonesia), make entry/exit decisions from a single dashboard instead of juggling indicators, news, and gut feeling.

## Highlights

- Watchlists across stocks, commodities, and crypto with live prices from Yahoo Finance and TradingView data.
- 10+ technical indicators (RSI, MACD, Bollinger Bands, …) rendered on interactive lightweight-charts.
- **News sentiment** for a ticker with keyword or LLM-based scoring, multi-provider fallback, and hourly caching.
- **MSCI classification** of IDX stocks from market cap and free float, plus "progress to next bracket".
- **Forecast micro-service**: Prophet model deployed as an AWS Lambda container image; feeds a multi-factor AI trading signal.
- Supabase auth with admin/user roles, cron-driven refresh, Next.js 14 App Router.
