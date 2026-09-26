---
layout: project
type: side-project
image: ""
title: "Tradify — ML-Driven Trading Signal Pipeline"
date: 2026
published: true
labels:
  - Side Project
  - Machine Learning
  - Time Series Forecasting
  - Quantitative Finance
  - Python
  - LightGBM
  - XGBoost
  - Prophet
  - Foundation Models
  - DuckDB
summary: "Open-source CLI pipeline that ingests market data, computes features, trains walk-forward ML and forecasting strategies, backtests them, and outputs a daily invest / hold / exit recommendation."
---
<img class="img-fluid" src="/img/personal/tradify.svg">

## Overview

[Tradify](https://github.com/dmadhitama/tradify) is a personal research project: a reproducible signal pipeline for US equities that never places trades but tells you, per ticker, whether to invest, hold, or exit.

## Highlights

- **One-command pipeline**: ingest → data quality → features → train ML models → signals → backtest → compare.
- **Strategy Protocol** shared by rule-based strategies (MA crossover, RSI, Bollinger bounce, Donchian, ADX), classical ML (logistic regression, random forest, LightGBM, XGBoost), forecasters (ARIMA, Prophet, GARCH) and zero-shot / fine-tuned foundation models (Chronos).
- **Lookahead-bias prevention** by design: truncation-invariant features with property tests, walk-forward training, and a model registry that only serves models trained strictly before the as-of date.
- Ensembles (majority vote, score sum, weighted) and capital allocation (equal weight, risk parity, Sharpe-weighted, Markowitz).
- Parquet/DuckDB stores, Optuna tuning, SHAP/RFE feature selection, Typer CLI.
