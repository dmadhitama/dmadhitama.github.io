---
layout: project
type: side-project
image: ""
title: "FinBot — Bilingual Agentic AI Financial Assistant"
date: 2025
published: true
labels:
  - Side Project
  - Agentic AI
  - Large Language Model
  - LangGraph
  - Next.js
  - TypeScript
  - Supabase
  - OCR
  - Stripe
summary: "Conversational personal-finance assistant (Indonesian + English) built on a LangGraph agent with 15+ tools: log expenses by chat, scan receipts, track accounts, assets, debts and net worth, with a freemium Stripe tier system."
---
<img class="img-fluid" src="/img/personal/finbot.svg">

## Overview

[FinBot](https://github.com/dmadhitama/finbot) lets you say "I spent Rp 50,000 on groceries" or upload a receipt photo, and the agent records the transaction, asks which account to use, and keeps your dashboard up to date.

## Highlights

- **LangGraph agent** with 15+ tools for creating/querying transactions, managing accounts, assets and debts, and answering "how much did I spend on food this month?".
- **Bill scanning**: receipt images are parsed into merchant, amount, category, date and line items, then confirmed conversationally.
- Bilingual responses (ID/EN) based on the user's input language; anti-hallucination and clarifying-question flows.
- Dashboard with Recharts, net-worth calculation, Excel export.
- Next.js 15, Better Auth, Supabase Postgres via Drizzle ORM, Stripe-based freemium tiers with usage limits, Docker/K8s deployment.
